import Navbar from "../MainPage/Navbar";

export default function RegisterPage() {
    return (<>
        <Navbar value='Login'/>
        <div className="justify-items-center border-2 border-gray-700/40 rounded-2xl mt-10 xl:ml-[35%] ml-[16%] xl:w-[30%] w-[67%] xl:h-120 h-110 content-">
	  	    <title>Register | Dipluv</title>
            <p className="text-[35px] text-gray-700 font-medium xl:mt-10 mt-6 mb-10">Register to Dipluv</p>
        
            <form >
                <label className="ml-6" >
                    Full Name<span className=" text-red-600">*</span>:
                </label>
                <input  name="text" type="text" className="ml-5 py-[5px] px-[20px] w-[90%] mb-[16px] border-1 border-gray-300 rounded hover:border-blue-500" placeholder="Your Full Name" autoComplete="email"  />
                <label className="ml-6" >
                    Email<span className=" text-red-600">*</span>:
                </label>
                <input  name="email" type="email" className="ml-5 py-[5px] px-[20px] w-[90%] mb-[16px] border-1 border-gray-300 rounded hover:border-blue-500" placeholder="Email" autoComplete="email"  />
            
                <label className="ml-6" >
                    Password<span className=" text-red-600">*</span>:
                </label>
                <input  name="password" type="password" className="ml-5 py-[5px] px-[20px] w-[90%] mb-[16px] border-1 border-gray-300 rounded hover:border-blue-500" placeholder="Password" autoComplete="current-password" />

                <div className="rounded-[20px] bg-gray-900 hover:bg-gray-700 active:bg-gray-800 xl:w-[25%] w-[30%] h-10 content-center mt-[10%] xl:ml-[38%] ml-[35%] xl:pl-3.5 pl-3 ">
                    <input type="submit" value="Register" className="text-amber-50 font-medium text-[20px]" />
                </div>
            </form>
        </div>
    </>)
}