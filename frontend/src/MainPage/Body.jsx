import {Link} from 'react-router'
import Image from './stomatolog.jpeg'
import Image1 from './dentistry.jpeg'

export default function BodyMainPage() {
    return (<>
        <h1 className="text-5xl font-bold  text-gray-700 text-center mt-15">WELCOME TO OUR DENTAL CLINIC</h1>
        <div className="flex w-[100%] h-110 mt-3">
            <div className="h-[100%] w-[50%] place-items-center content-center">
                <img className='h-75 rounded-lg' src={Image} alt="foto" />
            </div>
            <div className="h-[100%] w-[38%] text-center content-center">
                <h1 className='font-medium text-gray-700 text-2xl mb-3' >DIPLUV DENTAL – professional dental care</h1>
                <p className="text-gray-500">The main principle of the Dipluv Dental clinic is a comprehensive individual approach to each patient: we do not just treat a “sick” tooth, we create a detailed personal program, starting with diagnostics using advanced technologies and involving specialists of various dental profiles to solve the problems posed by the diagnostics.</p>
                <Link to='/login'><button className='bg-gray-950 text-amber-50 mt-7 font-medium w-25 h-8 rounded hover:bg-gray-800 cursor-pointer'>Sign up</button></Link>
            </div>
        </div>
        <div className="flex w-[100%] h-[100vh] mt-3 bg-gray-950">
            <div className="h-[100%] w-[50%] place-items-center content-center">
                <img className='h-75 rounded-lg' src={Image1} alt="foto" />
            </div>
            <div className="h-[100%] w-[38%] text-center content-center">
                <h1 className='font-medium text-amber-50 text-2xl mb-3' >We are here to take care of
your smile</h1>
                <p className="text-gray-300">If the high cost of dental implants has always held you back, it's time to change your perspective. With International Dental Clinic, you can have the quality and safety of 100% Made in Italy dental implants and all the professionalism of Italian dentists.</p>
            </div>
        </div>
    </>)
}