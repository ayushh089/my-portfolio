"use client"

import { useState, useEffect } from "react"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Navbar = () => {
  const [mobile, setMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  useGSAP(() => {
    const tl = gsap.timeline()

    // Logo text animation
    tl.from(".logo-text", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.3,
    })

    // Menu icon animation
    tl.from(
      ".icon-bar",
      {
        rotate: 360,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3",
    )

    // Nav items staggered animation
    tl.from(
      ".nav-item",
      {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
      },
      "-=0.2",
    )
  })

  return (
    <nav
      className={`fixed top-0 w-full flex justify-between items-center h-20 px-4 md:px-8 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-cyan-500/20"
            : "bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
        }`}
    >
      {/* Logo */}
      <a href="#home" className="flex items-center justify-center transition duration-300 ease-in-out">
        <div className="relative">
          <p className="logo-text text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-cyan-800 dark:from-cyan-400 dark:to-cyan-600 bg-clip-text text-transparent">
            ayush.dev
          </p>
          <div className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </div>
      </a>

      {/* Mobile menu button */}
      <button
        className="icon-bar md:hidden text-2xl p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors duration-200 text-cyan-700 dark:text-cyan-400"
        onClick={() => setMobile(!mobile)}
        aria-label={mobile ? "Close menu" : "Open menu"}
      >
        {mobile ? <ImCross /> : <FaBars />}
      </button>

      {/* Navigation links */}
      <div
        className={`${
          mobile
            ? "top-20 dark:bg-slate-900/95 opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-10 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
        } absolute md:relative  left-0 w-full md:w-auto bg-white/95  md:bg-transparent shadow-lg md:shadow-none z-40 transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 py-2 md:py-0 px-4 md:px-0">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <li key={index} className="nav-item group relative">
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-lg text-slate-800 dark:text-slate-200 py-4 md:py-2 pl-4 md:pl-0 font-medium transition-colors duration-200 hover:text-cyan-600 dark:hover:text-cyan-400"
                onClick={() => setMobile(false)}
              >
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  <h4>{item}</h4>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 group-hover:w-full transition-all duration-300"></div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu overlay */}
      {mobile && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobile(false)}
        ></div>
      )}
    </nav>
  )
}

export default Navbar
