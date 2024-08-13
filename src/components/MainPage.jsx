import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Project from "./Project";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact";
function MainPage() {
  return (
    <div className="relative">
      <section>
        <Navbar />
      </section>
      <section id="home">
        <Home />
      </section>
      <section id="about"className="scroll-mt-24" >
        <About />
      </section>
      <section id="projects" className="scroll-mt-24" >
        <Project />
      </section>
      <section id="contact" >
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default MainPage;
