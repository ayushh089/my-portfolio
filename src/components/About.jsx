import React from "react";
import skillData from "./skills.json";
function About() {
  return (
    <section className="flex flex-col items-center justify-center mt-15 px-4 bg-slate-50">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tighter mt-10">
        ABOUT ME
      </h2>
      <div className="w-8 h-1.5 bg-indigo-500 mb-8 rounded-xl"></div>
      <p className="text-center text-gray-600 max-w-3xl text-lg">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
      <div className=" flex-col flex lg:flex-row mt-20">
        <div className="flex flex-col lg:max-w-[50%] lg:ml-32">
          <div className="font-bold text-2xl">Get to know me!</div>
          <div className="mt-5 text-lg font-normal text-wrap">
            <div className="">
              I'm a Frontend Focused Web Developer building and managing the
              Front-end of Websites and Web Applications that leads to the
              success of the overall product.Check out some of my work in the
              Projects section.
            </div>
            <div>
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my{" "}
              <a
                href="https://www.linkedin.com/in/guptaayush1280"
                target="_blank"
                className="text-cyan-600 font-extrabold"
              >
                <u>LinkedIn</u>.
              </a>
            </div>
            <div>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </div>
          </div>
          <div className="inline-block mt-8">
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
              Contact
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-col lg:max-w-[50%] lg:ml-32">
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
