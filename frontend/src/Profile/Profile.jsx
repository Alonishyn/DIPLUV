import Navbar from "../MainPage/Navbar"
import {useSuspenseQuery} from "@tanstack/react-query";
import {Link} from 'react-router'
import Footer from "../Footer";


export default function Profile({contactRef, handleScroll}){
    const {data} = useSuspenseQuery({
		queryKey: ["dentists"],
		queryFn: () => fetch("http://localhost:8000/api/doctors").then(response => response.json())
	});

	
	return (<>
        <Navbar value='Log out' contactRef={contactRef} handleScroll={handleScroll}/>
        <title>Dentists | Dipluv</title>
        <nav className="w-[100%] h-11 mt-8 justify-items-center">
            <ul className="flex border rounded-3xl bg-gray-900">
                <Link to='/dentists'><li className="border px-8 py-2 rounded-3xl bg-amber-50 cursor-pointer font-medium hover:bg-gray-200">Dentists</li></Link>
                <Link to='/price'><li className="px-8 py-2 rounded-3xl text-amber-50 cursor-pointer font-medium hover:bg-gray-800">Price</li></Link>
            </ul>
        </nav>
        <h1 className='text-3xl text-center mt-5 font-medium text-gray-700'>OUR DENTISTS</h1>
        {data.map((dat, index) => {
            if(index % 2 === 0) {
                return (<>
                    <div className="h-[80vh]">
                        <div className=" mt-5 flex w-full h-89 pt-6">
                            <div className="w-[50%] justify-items-center">
                                <img src={`data:image/jpeg;base64,${dat.image.image_data}`} alt="foto" className="h-60 rounded-lg border-1 border-gray-900/25" />
                                <p className="text-4xl mt-5 font-medium text-gray-900">{dat.firstName} {dat.lastName}</p>
                            </div>
                            <div className="w-[42%] border-2 rounded-lg border-gray-900/15 ">
                                <h1 className="text-[23px] font-semibold pl-2 mt-3 text-gray-700">Diploma:</h1>
                                <p className="pl-4 text-gray-500">{dat.diplomas}</p>
                                <h1 className="text-[23px] font-semibold pl-2 mt-5 text-gray-700">Experience:</h1>
                                <p className="pl-4 text-gray-500">{dat.experience}</p>
                                <h1 className="text-[23px] font-semibold pl-2 mt-5 text-gray-700">Courses:</h1>
                                <p className="pl-4 text-gray-500">{dat.courses}</p>
                            </div>
                        </div>
                    </div>
                </>)
            } else {
                return (<>
                    <div className="h-[85vh] bg-gray-950">
                        <div className=" flex w-full h-89 pt-20">
                            <div className="w-[50%] justify-items-center">
                                <img src={`data:image/jpeg;base64,${dat.image.image_data}`} alt="foto" className="h-60 rounded-lg border-1 border-gray-900/25" />
                                <p className="text-4xl mt-5 font-medium text-amber-50">{dat.firstName} {dat.lastName}</p>
                            </div>
                            <div className="w-[42%] border-2 rounded-lg border-amber-50/60 ">
                                <h1 className="text-[23px] font-semibold pl-2 mt-3 text-amber-50">Diploma:</h1>
                                <p className="pl-4 text-gray-200">{dat.diplomas}</p>
                                <h1 className="text-[23px] font-semibold pl-2 mt-5 text-amber-50">Experience:</h1>
                                <p className="pl-4 text-gray-200">{dat.experience}</p>
                                <h1 className="text-[23px] font-semibold pl-2 mt-5 text-amber-50">Courses:</h1>
                                <p className="pl-4 text-gray-200">{dat.courses}</p>
                            </div>
                        </div>
                    </div>
                </>)
            }
        }
        )}
        <Footer contactRef={contactRef}/>
    </>)
}