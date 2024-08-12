import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center h-28 shadow-lg px-6">
      <h3 className="text-4xl font-semibold bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-500 bg-clip-text text-transparent">
      Ayush Gupta
    </h3>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobile(!Mobile)}
        >
          {Mobile ? <ImCross /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            Mobile ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          <li className="border-b md:border-none">
            <Link
              to="/"
              className="block text-xl text-black py-4 md:py-0 pl-6 md:pl-0 font-bold"
              onClick={() => setMobile(false)}
            >
              Home
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              to="/about"
              className="block text-xl text-black py-4 md:py-0 pl-6 md:pl-0 font-bold"
              onClick={() => setMobile(false)}
            >
              About
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              to="/project"
              className="block text-xl text-black py-4 md:py-0 pl-6 md:pl-0 font-bold"
              onClick={() => setMobile(false)}
            >
              Projects
            </Link>
          </li>
          <li className="border-b md:border-none">
            <Link
              to="/contact"
              className="block text-xl text-black py-4 md:py-0 pl-6 md:pl-0 font-bold"
              onClick={() => setMobile(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
