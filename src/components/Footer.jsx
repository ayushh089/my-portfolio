import React from 'react';
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="mt-5 bg-black text-white rounded-t-xl">
      <div className="w-full py-10 px-6 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl md:text-2xl font-extrabold mb-2">
              Ayush Gupta
            </h3>
            <p className="text-sm md:text-base max-w-sm font-thin">
              A Frontend focused Web Developer building the Frontend of
              Websites and Web Applications that leads to the success of the
              overall product.
            </p>
          </div>

          {/* Right Section - Social Links */}
          <div className="text-left md:text-left">
            <h3 className="text-xl md:text-2xl font-extrabold mb-4">
              SOCIAL
            </h3>
            <div className="flex justify-start md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/guptaayush1280"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <BsLinkedin size={30} color="white" />
              </a>
              <a
                href="https://x.com/realistic_ayush"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <BsTwitter size={30} color="white" />
              </a>
              <a
                href="https://github.com/ayushh089"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <BsGithub size={30} color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 text-sm">
        © Copyright 2024 . Made by{" "}
        <a
          href="https://www.linkedin.com/in/guptaayush1280"
          className="font-bold text-cyan-500"
        >
          Ayush Gupta
        </a>
      </div>
    </div>
  );
}

export default Footer;
