from datetime import datetime, timedelta, timezone
from typing import Annotated, Union

from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
import jwt
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt.exceptions import InvalidTokenError
from passlib.context import CryptContext
from pydantic import BaseModel
import base64


# to get a string like this run:
# openssl rand -hex 32
SECRET_KEY = "9bf3dac0e0c87171ea14ad22288db2e13f9577ecbce3092306aa3e8e667ec33d"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


fake_users_db = {
    "testuser": {
        "username": "testuser",
        "full_name": "Artem Lonishyn",
        "email": "johndoe@example.com",
        "hashed_password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
        "disabled": False,
    }
}

userData = {}


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Union[str, None] = None


class User(BaseModel):
    username: str
    email: Union[str, None] = None
    full_name: Union[str, None] = None
    disabled: Union[bool, None] = None


class UserInDB(User):
    hashed_password: str


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://localhost:5173/",
    "http://127.0.0.1:5173",
    "http://217.154.24.69",
    "http://217.154.24.69/",
    "http://dipluv.it/",
    "http://dipluv.it"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)


def authenticate_user(fake_db, username: str, password: str):
    user = get_user(fake_db, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user


def create_access_token(data: dict, expires_delta: Union[timedelta, None] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except InvalidTokenError:
        raise credentials_exception
    user = get_user(fake_users_db, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user


async def get_current_active_user(
    current_user: Annotated[User, Depends(get_current_user)],
):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


@app.post("/token")
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
) -> Token:
    user = authenticate_user(fake_users_db, form_data.username, form_data.password)
    if not user:
        return RedirectResponse(url='http://localhost:5173/login', status_code=302)
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    userData.update({"logedIn": True})
    return RedirectResponse(url='http://localhost:5173/dentists', status_code=302) 



def encode_image_to_base64(image_path):
    with open(image_path, "rb") as image_file:
        image_data = base64.b64encode(image_file.read()).decode('utf-8')
        return image_data

def create_json_response(image_data):
    json_response = {
        "status": "success",
        "image_data": image_data
    }
    return json_response

# Пример использования
image_path1 = "../frontend/public/dentist1.webp"
base64_image1 = encode_image_to_base64(image_path1)
json_response1 = create_json_response(base64_image1)

image_path2 = "../frontend/public/dentist2.webp"
base64_image2 = encode_image_to_base64(image_path2)
json_response2 = create_json_response(base64_image2)

image_path3 = "../frontend/public/dentist3.jpg"
base64_image3 = encode_image_to_base64(image_path3)
json_response3 = create_json_response(base64_image3)

# Отправка JSON-ответа (на сервере, например, используя Flask или Django)
# return json_response


@app.get("/api/doctors")
async def read_own_items():
    return [{'firstName': 'Lena', 'lastName': 'Shevchenko', 'diplomas': 'Bachelors', 'experience': 'Observing procedures, assisting with patient care, working in different practice settings, and gaining knowledge of various dental procedures and specialties', 'image': json_response1, 'courses': 'Course of Global Medicine'}, {'firstName': 'Artem', 'lastName': 'Lonishyn', 'diplomas': 'Master', 'experience': '', 'image': json_response2, 'courses': 'Course of Global Medicine'}, {'firstName': 'Vlad', 'lastName': 'Shevchenko', 'diplomas': 'Bachelors', 'experience': '', 'image': json_response3, 'courses': ''}]

@app.get("/api/user")
async def read_own_items():
    return userData

@app.put("/api/user")
async def read_own_items():
    return userData.update({"logedIn": False})