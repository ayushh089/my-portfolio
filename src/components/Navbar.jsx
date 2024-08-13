import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ayush_name from "../assets/ayush.png"
const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full flex justify-between items-center h-28 px-4 bg-white z-50 border-b-2">
        <img src={ayush_name} className="h-32 w-80 mt-2"></img>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMobile(!Mobile)}
        >
          {Mobile ? <ImCross /> : <FaBars />}
        </button>

        <ul
          className={`${
            Mobile ? "block mt-3" : "hidden"
          } md:flex md:items-center md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto pr-10 bg-white md:bg-transparent shadow-md md:shadow-none z-50`}
        >
          <li className="border-b md:border-none">
            <a
              href="#home"
              className="block text-xl text-black py-4 md:py-0 pl-6 md:pl-0 font-bold hover:text-cyan-500 hover:underline"
              onClick={() => setMobile(false)}
            >
              Home
            </a>
          </li>
          <li className="border-b md:border-none">
            <a
              href="#about"
              className="block text-xl text-black py-4 md:py-0 pl-6 md:pl-0 font-bold hover:text-cyan-500 hover:underline"
              onClick={() => setMobile(false)}
            >
              About
            </a>
          </li>
          <li className="border-b md:border-none">
            <a
              href="#projects"
              className="block text-xl text-black py-4 md:py-0 pl-6 md:pl-0 font-bold hover:text-cyan-500 hover:underline"
              onClick={() => setMobile(false)}
            >
              Projects
            </a>
          </li>
          <li className="border-b md:border-none">
            <a
              href="#contact"
              className="block text-xl text-black py-4 md:py-0 pl-6 md:pl-0 font-bold hover:text-cyan-500 hover:underline"
              onClick={() => setMobile(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
