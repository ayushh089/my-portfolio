"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import skillData from "./skills.json";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);
  const skillCardsRef = useRef([]);

  useEffect(() => {
    const elem = aboutRef.current;

    // Animate the About section
    gsap.fromTo(
      elem,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate each skill card individually
    skillCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(0.8)",
          delay: index * 0.04, // small delay between cards
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-5 flex flex-col items-center justify-center py-10"
    >

      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="animated-bg-circle absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/10"></div>
        <div className="animated-bg-circle absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/10"></div>
        <div className="animated-bg-circle absolute top-[40%] right-[20%] w-[200px] h-[200px] rounded-full bg-cyan-600/5 dark:bg-cyan-600/10"></div>
        <div className="animated-bg-circle absolute bottom-[30%] left-[5%] w-[250px] h-[250px] rounded-full bg-cyan-600/5 dark:bg-cyan-600/10"></div>
      </div>

    
      <div className="absolute inset-0 bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] bg-cover bg-center opacity-10"></div>

     
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4 tracking-tighter mt-14 text-center">
          ABOUT ME
        </h2>
        <div className="w-8 h-1.5 bg-cyan-500 mb-8 rounded-xl"></div>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl text-lg mb-20">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          {/* Left - About Text */}
          <div className="flex flex-col lg:max-w-[50%] mb-16 lg:mb-0 lg:ml-10 px-2">
            <h3 className="font-bold text-2xl mb-5 text-gray-800 dark:text-white">
              Get to know me!
            </h3>
            <div className="text-lg font-normal space-y-1 text-gray-700 dark:text-gray-300">
              <p>
                I'm a Full Stack Developer skilled in building and managing both
                the Front-end and Back-end of scalable Websites, Web
                Applications, and Blockchain-based solutions.
              </p>
              <p>
                Feel free to Connect or Follow me on{" "}
                <a
                  href="https://www.linkedin.com/in/guptaayush1280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 font-bold "
                >
                  LinkedIn
                </a>
                .
              </p>
              <p>
                I'm open to Job opportunities where I can contribute, learn, and
                grow.
              </p>
            </div>

            <a href="#contact">
              <button
                className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-semibold rounded-xl mt-6 w-full
                 h-16
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
                Contact
              </button>
            </a>
          </div>

      
          <div className="grid grid-cols-3 gap-6 lg:max-w-[40%]">
            {skillData.skills.map((skill, index) => (
              <div
                key={index}
                ref={(el) => (skillCardsRef.current[index] = el)}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-14 h-14 mb-2 object-contain"
                />
                <p className="text-center text-gray-800 dark:text-gray-300 text-sm font-semibold">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-cyan-500/20 rounded-bl-xl"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-cyan-500/20 rounded-tr-xl"></div>
    </section>
  );
}

export default About;
