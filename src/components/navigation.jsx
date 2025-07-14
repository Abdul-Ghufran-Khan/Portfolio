"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Github } from "lucide-react"
import { Linkedin } from "lucide-react"
import { Mail } from "lucide-react"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Close mobile menu when navigating
      setIsMobileMenuOpen(false)
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/50 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Advanced Animated Logo */}
            <div
              className="group cursor-pointer transition-all duration-500 hover:scale-105"
              onClick={() => scrollToSection("home")}
            >
              <div className="relative flex items-center">
                {/* Main Logo Container */}
                <div className="relative">
                  {/* Outer Ring Animation */}
                  <div className="absolute inset-0 w-16 h-16 border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-0.5 group-hover:animate-spin">
                    <div className="w-full h-full bg-black rounded-full"></div>
                  </div>

                  {/* Inner Logo Circle */}
                  <div className="relative w-16 h-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-full flex items-center justify-center border border-gray-700 group-hover:border-gray-500 transition-all duration-300 shadow-2xl">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Code-like Pattern */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-xs text-gray-600 font-mono opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                        <div className="transform -rotate-45">{"<>"}</div>
                      </div>
                    </div>

                    {/* Main Letters */}
                    <div className="relative z-10 flex items-center justify-center">
                      <span className="text-white font-bold text-xl tracking-tighter transform group-hover:scale-110 transition-all duration-300 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-500">
                        A
                      </span>
                      <span className="text-white font-bold text-xl tracking-tighter transform group-hover:scale-110 transition-all duration-300 bg-gradient-to-r from-purple-200 via-pink-200 to-white bg-clip-text text-transparent group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-blue-400 delay-75">
                        G
                      </span>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute top-1 right-1 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    <div className="absolute bottom-1 left-1 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"></div>
                    <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
                  </div>

                  {/* Orbiting Elements */}
                  <div className="absolute inset-0 w-16 h-16">
                    <div className="absolute top-0 left-1/2 w-1 h-1 bg-blue-500 rounded-full transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-purple-500 rounded-full transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-500"></div>
                    <div className="absolute left-0 top-1/2 w-1 h-1 bg-pink-500 rounded-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-700"></div>
                    <div className="absolute right-0 top-1/2 w-1 h-1 bg-cyan-500 rounded-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-900"></div>
                  </div>
                </div>

                {/* Logo Text */}
                <div className="ml-4 hidden sm:block">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="text-white font-bold text-2xl leading-none bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        Abdul
                      </span>
                      <div className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-400 text-lg font-medium leading-none group-hover:text-gray-300 transition-colors duration-300 tracking-wide">
                        Ghufran
                      </span>
                      <div className="text-xs text-gray-600 font-mono opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                        .dev
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Connection Line */}
                <div className="absolute -bottom-3 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-700 rounded-full"></div>

                {/* Glow Effect */}
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Enhanced Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "certifications", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="relative group py-2 px-4 hover:text-gray-300 transition-all duration-300 capitalize"
                >
                  <span className="relative z-10 font-medium">{section}</span>

                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Animated Underline */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>

                  {/* Side Indicators */}
                  <div className="absolute left-0 top-1/2 w-0.5 h-0 bg-gradient-to-b from-blue-500 to-purple-500 group-hover:h-full group-hover:top-0 transition-all duration-300 rounded-full"></div>
                  <div className="absolute right-0 top-1/2 w-0.5 h-0 bg-gradient-to-b from-purple-500 to-pink-500 group-hover:h-full group-hover:top-0 transition-all duration-300 rounded-full delay-75"></div>
                </button>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button (Toggles between Hamburger and X) */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="relative group p-2 text-white hover:text-gray-300 transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Conditionally render hamburger or X */}
                {!isMobileMenuOpen ? (
                  <svg className="relative z-10 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <X className="relative z-10 w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-lg z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-3/4 bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl border-l border-gray-700 shadow-2xl flex flex-col items-center pt-24 pb-8 transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-center space-y-6 py-8 w-full">
            {["home", "about", "skills", "certifications", "projects", "contact"].map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative group py-3 px-8 text-xl font-medium text-white hover:text-gray-300 transition-all duration-300 capitalize w-full text-center"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{section}</span>

                {/* Animated Underline */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>

                {/* Side Glow */}
                <div className="absolute -left-4 top-1/2 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transform -translate-y-1/2 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Social Links in Mobile Menu */}
          <div className="mt-auto flex space-x-8 pb-8">
            <a
              href="https://github.com/Abdul-Ghufran-Khan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors p-2"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-ghufran-87bbb62b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors p-2"
            >
              <Linkedin size={28} />
            </a>
            <a href="mailto:abdulghufran267@gmail.com" className="text-white hover:text-blue-400 transition-colors p-2">
              <Mail size={28} />
            </a>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  )
}

export default Navigation
