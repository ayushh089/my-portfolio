import React, { useEffect, useRef } from "react";
import projectsData from "./projectDetails.json";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const images = { p1, p2, p3 };

gsap.registerPlugin(ScrollTrigger);

function Project() {
  const aboutRef = useRef(null);
  useEffect(() => {
    const elem = aboutRef.current;

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

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tighter mt-10">
          PROJECTS
        </h2>
        <div className="w-8 h-1.5 bg-cyan-500 mb-8 rounded-xl"></div>
        <p className="text-center text-white max-w-3xl text-lg mb-12">
          Here you will find some of the personal and client projects that I
          created, with each project containing its own case study.
        </p>

        <div className="project-item flex flex-col  mt-20 justify-center px-4 md:px-36 sm:w-full md:w-screen">
          {Object.keys(projectsData.projects).map((key, index) =>
            projectsData.projects[key].map((project, idx) => (
              <div
                key={`${index}-${idx}`}
                className="flex flex-col sm:flex-row sm:items-center mb-20"
              >
                <div className="w-full sm:w-1/2 flex justify-center items-center">
                  <img
                    src={images[key]}
                    alt={key}
                    className="w-48 h-48 xs:w-56 xs:h-56 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg transition-all duration-300"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="flex flex-col justify-center items-center sm:items-start sm:justify-start mt-8 sm:mt-0 sm:ml-8 w-full sm:w-1/2">
                  <h2 className=" text-3xl font-bold mb-4 text-white">
                    {project.name}
                  </h2>
                  <p className="text-white text-lg mb-8">{project.desc}</p>
                  <div className="w-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
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
                        Visit
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-cyan-500/20 rounded-bl-xl"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-cyan-500/20 rounded-tr-xl"></div>
    </section>
  );
}

export default Project;
