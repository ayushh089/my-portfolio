import React from "react";

function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
        <div className="text-black font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-center tracking-wider sm:tracking-widest break-words">
          Hey, I'm Ayush Gupta
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 text-center mx-auto">
          A Result-Oriented Web Developer building and managing Websites and Web Applications that lead to the success of the overall product
        </p>
      </div>
    </div>
  );
}

export default Home;