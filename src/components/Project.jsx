import React, { useRef } from "react";
import projectsData from "./projectDetails.json";
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = { p1, p2, p3 };

function Project() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".project-title", {
      opacity: 0,
      y: -50,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".project-title",
        start: "top 80%",
      },
    });

    gsap.from(".project-subtitle", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".project-subtitle",
        start: "top 80%",
      },
    });

    gsap.utils.toArray(".project-item").forEach((item, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
        },
      });

      tl.from(item.querySelector(".project-image"), {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        duration: 0.8,
      })
        .from(item.querySelector(".project-content"), {
          opacity: 0,
          x: index % 2 === 0 ? 100 : -100,
          duration: 0.8,
        }, "-=0.6")
        .from(item.querySelector(".project-button"), {
          opacity: 0,
          y: 20,
          duration: 0.4,
        }, "-=0.4");
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="flex flex-col items-center justify-center mt-15 px-4 bg-white">
      <h2 className="project-title text-4xl font-extrabold text-gray-800 mb-4 tracking-tighter mt-10">
        PROJECTS
      </h2>
      <div className="w-8 h-1.5 bg-cyan-500 mb-8 rounded-xl"></div>
      <p className="project-subtitle text-center text-gray-600 max-w-3xl text-lg">
        Here you will find some of the personal and client projects that I
        created, with each project containing its own case study.
      </p>

      <div className="flex flex-col mt-32 justify-center px-4 md:px-36">
        {Object.keys(projectsData.projects).map((key, index) => (
          <div
            key={index}
            className="project-item flex flex-col sm:flex-row sm:items-center mb-20"
          >
            <div className="project-image w-full sm:w-1/2">
              <img src={images[key]} alt={key} className="w-full h-auto" />
            </div>
            <div className="project-content flex flex-col justify-center items-center sm:items-start sm:justify-start mt-8 sm:mt-0 sm:ml-8 w-full sm:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Project {index + 1}</h2>
              <p className="text-gray-700 text-lg mb-8 font-thin">
                {projectsData.projects[key]}
              </p>
              <div className="inline-block">
                <button
                  className="project-button bg-cyan-600 text-white font-semibold rounded-lg w-44 h-12
                    text-lg flex items-center justify-center
                    tracking-wide uppercase
                    transition duration-300 ease-in-out 
                    hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50
                    transform hover:scale-105"
                >
                  LINK
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;