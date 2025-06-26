import {useNavigate, Link} from "react-router";
import { useMutation } from "@tanstack/react-query";

export default function Navbar(props) {
    const mutation = useMutation({
		mutationFn: async data => {
			const response = await fetch("http://localhost:8000/api/user", {
                method: "PUT",
                body: JSON.stringify(data)
            });
            return await response.json();
		}
	});

    const navigate = useNavigate()

    function handleLogin() {
        if (props.value === 'Login') {
            navigate("/login")
        } else if (props.value === 'Register'){
            navigate('/register')
        } else if(props.value === 'Log out') {
            window.localStorage.clear()
            mutation.mutate({
                logedIn: false
            })
            navigate('/')
        } else if (props.value === 'Profile') {
            navigate('/dentists')
        }
		
    }

    return (<>
        <div className="flex h-15 w-full bg-gray-900">
            <div className="w-[75%]">
                <h1 className="cursor-default text-amber-50 text-4xl font-bold mt-1.5 ml-4"><Link to='/'>D+</Link></h1>
            </div>
            <div className="flex w-[25%] gap-[10%]">
                <h1 className=" text-amber-50 text-[20px] font-medium pt-3.5 pl-15 cursor-pointer" onClick={props.handleScroll}>Contact us</h1>
                <button className="text-amber-50 border-amber-50 hover:bg-gray-700 border-2 rounded pb-7 pl-4 pr-4 mb-3 mt-3 text-[20px] font-medium cursor-pointer" onClick={handleLogin}>{props.value}</button>
            </div>
        </div>
    </>)
}