"use client";

import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  const [typed, setTyped] = useState(false);
  const [typedText, setTypedText] = useState("");

  // Store the complete text once typing is done
  const completeText =
    "A Result-Oriented Full Stack and Blockchain Developer building Scalable Web Applications and Smart Contract Solutions that drive product success.";

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate background elements
    tl.from(
      ".animated-bg-circle",
      {
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "power3.out",
      },
      0
    );

    // Main animations
    tl.from(
      ".my-bg-logo",
      {
        scale: 3,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      },
      0.3
    );

    tl.from(
      ".my-intro",
      {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      1
    );

    tl.from(
      ".typewriter-container",
      {
        opacity: 0,
        duration: 0.6,
      },
      1.4
    );

    tl.from(
      ".button-container",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
      },
      1.8
    );

    tl.from(
      ".project-button, .resume-button",
      {
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      2
    );
  });

  useEffect(() => {
    if (typed) {
      setTypedText(completeText);
    }
  }, [typed]);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="animated-bg-circle absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/10"></div>
        <div className="animated-bg-circle absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/10"></div>
        <div className="animated-bg-circle absolute top-[40%] right-[20%] w-[200px] h-[200px] rounded-full bg-cyan-600/5 dark:bg-cyan-600/10"></div>
        <div className="animated-bg-circle absolute bottom-[30%] left-[5%] w-[250px] h-[250px] rounded-full bg-cyan-600/5 dark:bg-cyan-600/10"></div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] bg-cover bg-center opacity-10"></div>

      {/* Background logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="my-bg-logo bg-[url('./assets/ayush.png')] bg-cover bg-center opacity-[0.03] w-[700px] h-[700px] rounded-full"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
        {/* Add your content here */}
        <div className="text-center">
          <h1 className="my-intro text-black dark:text-white font-extrabold font-body text-5xl sm:text-6xl md:text-7xl  tracking-wider sm:tracking-widest mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-800 dark:from-cyan-400 dark:to-cyan-600">
            hey, i'm ayush gupta
          </h1>

          <div className="typewriter-container relative max-w-3xl mx-auto mb-12">
            <div className="absolute -left-2 -top-2 w-2 h-2 bg-cyan-600 rounded-full opacity-75"></div>
            <div className="absolute -right-2 -bottom-2 w-2 h-2 bg-cyan-600 rounded-full opacity-75"></div>

            <p className="context-about-me text-lg sm:text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed px-4">
              {!typed ? (
                <Typewriter
                  words={[completeText]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={40}
                  deleteSpeed={0}
                  delaySpeed={1000}
                  onType={(text) => {
                    // This helps with the flicker when switching to static text
                    setTypedText(text);
                  }}
                  onTypeDone={() => {
                    setTyped(true);
                  }}
                />
              ) : (
                typedText
              )}
            </p>
          </div>

          <div className="mt-28 button-container flex flex-col sm:flex-row justify-center items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#projects" className="project-button group">
              <button
                className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-semibold rounded-xl
                 w-48 h-16
                 text-lg
                 flex items-center justify-center
                 tracking-[2px]
                 uppercase
                 transition duration-300 ease-in-out 
                 shadow-lg shadow-cyan-500/20
                 hover:shadow-xl hover:shadow-cyan-500/30
                 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50
                 transform hover:scale-105 hover:translate-y-[-3px]"
              >
                <span>Projects</span>
                <svg
                  className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </a>

            <a
              href="https://drive.google.com/drive/folders/1ZiuVvOiHp4q5sxfyHet8XZVqGDmZI36p?usp=sharingFvZvdb5Y-CbKECxRDMm-AXtRM3zjO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button group"
            >
              <button
                className="bg-white text-cyan-700 font-semibold rounded-xl 
                 w-48 h-16
                 text-lg
                 flex items-center justify-center
                 tracking-[2px]
                 uppercase
                 transition duration-300 ease-in-out 
                 border-2 border-cyan-600
                 shadow-lg shadow-cyan-500/10
                 hover:shadow-xl hover:shadow-cyan-500/20
                 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50
                 transform hover:scale-105 hover:translate-y-[-3px]"
              >
                <span>Resume</span>
                <svg
                  className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-y-[-2px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-cyan-500/20 rounded-bl-xl"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-cyan-500/20 rounded-tr-xl"></div>
    </section>
  );
}

export default Home;
