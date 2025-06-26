import {Link} from 'react-router'
import Navbar from '../MainPage/Navbar'
import Footer from '../Footer'

export default function PricePage({contactRef, handleScroll}) {
    return (<>
        <Navbar value='Log out'contactRef={contactRef} handleScroll={handleScroll}/>
        <div className='min-h-[100vh]'>
            <title>Price | Lopuh</title>
            <nav className="w-[100%] h-11 mt-8 justify-items-center">
                <ul className="flex border rounded-3xl bg-gray-900">
                    <Link to='/dentists'><li className="px-8 py-2 rounded-3xl text-amber-50 cursor-pointer font-medium hover:bg-gray-800">Dentists</li></Link>
                    <Link to='/price'><li className="border px-8 py-2 rounded-3xl bg-amber-50 cursor-pointer font-medium hover:bg-gray-200">Price</li></Link>
                </ul>
            </nav>
            <h1 className='text-3xl text-center mt-5 font-medium text-gray-700'>OUR PRICE</h1>
        </div>
        <Footer contactRef={contactRef}/>
    </>)
}