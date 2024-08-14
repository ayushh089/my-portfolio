import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Project from "./Project";
import Footer from "./Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Home() {

  return (
    <section
      id="home"
      className="relative h-screen w-full mt-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-4 sm:p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="my-intro animate-typing text-black font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider sm:tracking-widest break-words mb-4 sm:mb-6">
            Hey, I'm Ayush Gupta
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that lead to the success of the overall product
          </p>
          <a href="#projects">
            <div className="inline-block mt-5">
              <button
                className="bg-cyan-600 text-white font-semibold rounded-lg 
                   w-44 h-16
                   md:text-1xl text-base 
                   flex items-center justify-center
                   tracking-[2px]
                   uppercase
                   transition duration-300 ease-in-out 
                   hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50
                   transform hover:scale-105"
              >
                Projects
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
