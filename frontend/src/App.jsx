import {BrowserRouter, Routes, Route} from "react-router";
import MainPage from "./MainPage/MainPage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import Profile from "./Profile/Profile";
import PricePage from "./Profile/PricePage";
import {useRef, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {

	const contactRef = useRef(null)

	function handleScroll() {
        contactRef.current.scrollIntoView()
    }

	useEffect(() => {
    	AOS.init({
      		duration: 1400,    // тривалість анімації
      		once: true        // анімація один раз при появі
    		});
		}, []);

  return <BrowserRouter>
	<div className="App">
		<Routes>
			<Route path="/" element={<MainPage contactRef={contactRef} handleScroll={handleScroll} />} />
			<Route path="/login" element={<LoginPage />} />
      		<Route path="/register" element={<RegisterPage />} />
			<Route path="/dentists" element={<Profile contactRef={contactRef} handleScroll={handleScroll} />} />
			<Route path="/price" element={<PricePage contactRef={contactRef} handleScroll={handleScroll} />} />
			<Route path="/*" element={<h1 className="text-center text-6xl font-medium pt-65 text-amber-50 bg-gray-950">PAGE NOT FOUND</h1>} />
		</Routes>
	</div>
	</BrowserRouter>
    
}

