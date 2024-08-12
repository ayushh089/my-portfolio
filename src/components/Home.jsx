import React from "react";

function Home() {
  return (
    <div className="relative h-[100vh] w-full">
      <div className="absolute inset-0 bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute left-1/2 transform -translate-x-1/2 p-4 sm:p-6 md:p-8 lg:p-12 top-[20%] sm:top-[25%] md:top-[30%] ">
        <div className="text-black font-extrabold text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] uppercase text-center tracking-[3px] sm:tracking-[4px] lg:whitespace-nowrap">
          Hey, I'm Ayush Gup
        </div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-6 text-center max-w-[80%] mx-auto">
          A Result-Oriented Web Developer building and managing Websites and Web Applications that lead to the success of the overall product
        </p>
      </div>
    </div>
  );
}

export default Home;
