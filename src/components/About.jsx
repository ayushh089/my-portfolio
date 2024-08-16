import React, { useEffect, useRef } from "react";
import skillData from "./skills.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
      },
    });

    tl.from(".about-me", {
      opacity: 0,
      scale: 2,
      duration: 0.4,
      rotate:720,
      x:1500
    });
    tl.from(".about-me-text", {
      opacity: 0,
      scale: 4,
      duration: 0.8,
      x:1500
    });
  }, { scope: sectionRef });
  return (
    <section ref={sectionRef} className="flex flex-col items-center justify-center mt-15 px-4 bg-slate-50 ">
      <h2 className="about-me text-4xl font-extrabold text-gray-800 mb-4 tracking-tighter mt-10">
        ABOUT ME
      </h2>
      <div className="w-8 h-1.5 bg-cyan-500 mb-8 rounded-xl"></div>
      <p className="about-me-text text-center text-gray-600 max-w-3xl text-lg">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
      <div className=" flex-col flex lg:flex-row mt-32">
        <div className="flex flex-col lg:max-w-[50%] lg:ml-32">
          <div className="font-bold text-2xl">Get to know me!</div>
          <div className="mt-5 text-lg font-normal text-wrap">
            <div className="font-thin">
              I'm a Frontend Focused Web Developer building and managing the
              Front-end of Websites and Web Applications that leads to the
              success of the overall product.Check out some of my work in the
              Projects section.
            </div>
            <div className="font-thin">
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my{" "}
              <a
                href="https://www.linkedin.com/in/guptaayush1280"
                target="_blank"
                className="text-cyan-600 font-extrabold"
              >
                <u className="font-medium">LinkedIn</u>.
              </a>
            </div>
            <div className="font-thin">
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </div>
          </div>
          <div className="inline-block mt-8">
            <button
              className="bg-cyan-600 text-white font-semibold rounded-lg mb-12
                   w-44 h-12
                   md:text-1xl text-base 
                   flex items-center justify-center
                   tracking-[2px]
                   uppercase
                   transition duration-300 ease-in-out 
                   hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50
                   transform hover:scale-105"
            >
              Contact
            </button>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 flex flex-col lg:max-w-[50%] lg:ml-32">
          <div className="font-bold text-2xl">My Skills</div>
          <div className="mt-5 text-lg flex flex-row flex-wrap">
            {skillData.skills.map((skill, index) => (
              <div
                className="bg-slate-300 mr-3 mb-3 px-3 rounded-xl py-1 text-black"
                key={index}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;