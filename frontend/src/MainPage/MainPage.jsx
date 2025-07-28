import Navbar from "./Navbar"
import BodyMainPage from "./Body"
import Footer from "../Footer"
import { useSuspenseQuery } from "@tanstack/react-query";

export default function MainPage({contactRef, handleScroll}) {
    const {data} = useSuspenseQuery({
		queryKey: ["users"],
		queryFn: () => fetch("/api/user").then(response => response.json())
	});

    if(data.logedIn === true){
        return (<>
            <Navbar value='Profile' contactRef={contactRef} handleScroll={handleScroll}/>
            <BodyMainPage />
            <Footer contactRef={contactRef}/>
        </>)
    } else {
        return (<>
            <Navbar value='Login' contactRef={contactRef} handleScroll={handleScroll}/>
            <BodyMainPage />
            <Footer contactRef={contactRef}/>
        </>)
    }
}