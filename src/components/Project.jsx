import React from "react";

function Project() {
  return (
    <section className="flex flex-col items-center justify-center mt-15 px-4 bg-slate-50">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tighter mt-10">
        Projects
      </h2>
      <div className="w-8 h-1.5 bg-indigo-500 mb-8 rounded-xl"></div>
      <p className="text-center text-gray-600 max-w-3xl text-lg">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>
    </section>
  );
}

export default Project;
