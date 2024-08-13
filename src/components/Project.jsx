import React from "react";
import projectsData from "./projectDetails.json";
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";

const images = { p1, p2, p3 };

function Project() {
  return (
    <section className="flex flex-col items-center justify-center mt-15 px-4 bg-white">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tighter mt-10">
        PROJECTS
      </h2>
      <div className="w-8 h-1.5 bg-cyan-500 mb-8 rounded-xl"></div>
      <p className="text-center text-gray-600 max-w-3xl text-lg">
        Here you will find some of the personal and client projects that I
        created, with each project containing its own case study.
      </p>

      <div className="flex flex-col mt-20 justify-center px-4 md:px-36">
        {Object.keys(projectsData.projects).map((key, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center mb-12"
          >
            <div className="w-full sm:w-1/2">
              <img src={images[key]} alt={key} className="w-full h-auto" />
            </div>
            <div className="flex flex-col mt-8 sm:mt-0 sm:ml-8 w-full sm:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Project {index + 1}</h2>
              <p className="text-gray-700 text-lg mb-8 font-thin">
                {projectsData.projects[key]}
              </p>
              <div className="inline-block">
                <button
                  className="bg-cyan-600 text-white font-semibold rounded-lg w-44 h-12
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
