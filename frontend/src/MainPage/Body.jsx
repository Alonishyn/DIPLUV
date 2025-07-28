import {Link} from 'react-router'
import Image from './stomatolog.jpeg'
import Image1 from './dentistry.jpeg'

export default function BodyMainPage() {
    return (<>
        <h1 data-aos="fade-up" className="xl:text-5xl text-4xl font-semibold  text-gray-700 xl:text-center text-center xl:mt-11 mt-6 ml-4">Advanced Dental Solutions <span className="text-amber-500">with a Smile</span></h1>
        <h2 className="text-lg text-gray-600 mt-4 text-center">
  Trusted by hundreds for professional and gentle dental care.
</h2>
        <div className="xl:flex w-[100%] xl:h-110 xl:mt-0.5 mt-3">
            <div className="h-[100%] xl:w-[50%] place-items-center content-center">
                <img data-aos="zoom-in" className='xl:h-85 h-65 rounded-lg' src={Image} alt="foto" />
            </div>
            <div className="h-[100%] xl:w-[38%] w-[90%] text-center content-center ml-4 mt-5">
                <h1 className='font-medium text-gray-700 text-2xl mb-6' >Dipluv dental – professional dental care</h1>
                <p data-aos="fade-left" className="text-gray-500">The main principle of the Dipluv Dental clinic is a comprehensive individual approach to each patient: we do not just treat a “sick” tooth, we create a detailed personal program, starting with diagnostics using advanced technologies and involving specialists of various dental profiles to solve the problems posed by the diagnostics.</p>
                <p data-aos="fade-left" className="text-gray-800 mt-4 font-medium">Ready to book your first visit?</p>
                <Link to='/login'><button className='bg-gray-950 text-amber-50 mt-5 font-medium w-25 h-8 rounded hover:bg-gray-800 cursor-pointer'>Sign up</button></Link>
            </div>
        </div>
        <div className="xl:flex w-[100%] h-[100vh] mt-3 bg-gray-950">
            <div className="xl:h-[100%] h-[50%] xl:w-[50%] place-items-center content-center mt-5 pt-5">
                <img data-aos="zoom-in" className='xl:h-85 h-65 rounded-lg' src={Image1} alt="foto" />
            </div>
            <div className="xl:h-[100%] h-[50%] xl:w-[38%] w-[90%] ml-6 text-center xl:content-center mt-8">
                <h1 className='font-medium text-amber-50 text-2xl mb-6' >We are here to take care of
your smile</h1>
                <p data-aos="fade-left" className="text-gray-300 mt-7">If the high cost of dental implants has always held you back, it's time to change your perspective. With International Dental Clinic, you can have the quality and safety of 100% Made in Italy dental implants and all the professionalism of Italian dentists.</p>
            </div>
        </div>
    </>)
}