"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function Navigation() {
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

            {/* Enhanced Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="relative group p-2 text-white hover:text-gray-300 transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
        className={`fixed inset-0 bg-black/90 backdrop-blur-lg z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`flex flex-col items-center justify-center h-full transition-all duration-500 ${
            isMobileMenuOpen ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-10"
          }`}
        >
          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-center space-y-8 py-8">
            {["home", "about", "skills", "certifications", "projects", "contact"].map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative group py-3 px-8 text-2xl font-medium text-white hover:text-gray-300 transition-all duration-300 capitalize"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{section}</span>

                {/* Animated Underline */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 rounded-full"></div>

                {/* Side Glow */}
                <div className="absolute -left-4 top-1/2 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transform -translate-y-1/2 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Social Links in Mobile Menu */}
          <div className="absolute bottom-16 flex space-x-8">
            <a href="#" className="text-white hover:text-blue-400 transition-colors p-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors p-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors p-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
              </svg>
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
