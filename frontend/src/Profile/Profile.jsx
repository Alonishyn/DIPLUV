import Navbar from "../MainPage/Navbar";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import DentistGrid from "./DentistGrid";

export default function Profile({ contactRef, handleScroll }) {
  const { data } = useSuspenseQuery({
    queryKey: ["dentists"],
    queryFn: () => fetch("/api/doctors").then((res) => res.json()),
  });

  return (
    <>
      <Navbar value="Log out" contactRef={contactRef} handleScroll={handleScroll} />
      <title>Dentists | Dipluv</title>

      <nav className="w-[100%] h-11 mt-8 justify-items-center">
        <ul className="flex border rounded-3xl bg-gray-900">
          <Link to="/dentists">
            <li className="border px-8 py-2 rounded-3xl bg-amber-50 cursor-pointer font-medium">
              Dentists
            </li>
          </Link>
          <Link to="/price">
            <li className="px-8 py-2 rounded-3xl text-amber-50 cursor-pointer font-medium">
              Price
            </li>
          </Link>
        </ul>
      </nav>

      <h1 className="text-3xl text-center mt-5 font-medium text-gray-700">
        OUR DENTISTS
      </h1>

      {/* 👇 Передаємо отримані дані */}
      <DentistGrid dentists={data} />

      <Footer contactRef={contactRef} />
    </>
  );
}