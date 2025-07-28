import Navbar from '../MainPage/Navbar'
import ErrorMessage from '../ErrorMessage'


export default function LoginPage() {

return (
    <>
        <Navbar value='Register'/>
        <div className="justify-items-center border-2 border-gray-700/40 rounded-2xl mt-20 ml-[35%] w-[30%] h-105 content-">
	  	    <title>Login | Dipluv</title>
            <p className="text-[35px] text-gray-700 font-medium mt-10 mb-10">Login to Dipluv</p>
        
            <form action='/token/' method='post'>
                <label className="ml-6" >
                    Username<span className=" text-red-600">*</span>:
                </label>
                <input  name="username" type="username" className="ml-5 py-[5px] px-[20px] w-[90%] mb-[16px] border-1 border-gray-300 rounded hover:border-blue-500" placeholder="Username" autoComplete="email" />
            
                <label className="ml-6" >
                    Password<span className=" text-red-600">*</span>:
                </label>
                <input  name="password" type="password" className="ml-5 py-[5px] px-[20px] w-[90%] mb-[16px] border-1 border-gray-300 rounded hover:border-blue-500" placeholder="Password" autoComplete="current-password" />
                <ErrorMessage/>
                <div className="rounded-[20px] bg-gray-900 hover:bg-gray-700 active:bg-gray-800 w-[25%] h-10 content-center mt-[10%] ml-[38%] pl-6">
                    <input type="submit" value="Login" className="text-amber-50 font-medium text-[20px]" />
                </div>
            </form>
        </div>
    </>)
}