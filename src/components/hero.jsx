"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react"

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const downloadCV = () => {
    // Create a temporary link element
    const link = document.createElement("a")
    link.href = "/cv/A.Ghufran-resume.pdf" // Path to your CV file in public folder
    link.download = "Abdul-Ghufran-Resume.pdf" // Name for the downloaded file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20 sm:pt-0 bg-gradient-to-br from-black via-gray-900 to-black relative"
    >
      <div className="text-center max-w-4xl mx-auto mt-8 sm:mt-0">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight">
            Abdul Ghufran
          </h1>
          <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer & UI/UX Enthusiast crafting digital experiences with modern technologies
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black bg-transparent px-8 py-3 text-lg flex items-center gap-2"
            onClick={downloadCV}
          >
            <Download size={20} />
            Download CV
          </Button>
        </div>

        <div className="flex justify-center space-x-8 mb-16">
          <a
            href="https://github.com/Abdul-Ghufran-Khan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors p-2"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-ghufran-87bbb62b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors p-2"
          >
            <Linkedin size={28} />
          </a>
          <a href="mailto:abdulghufran267@gmail.com" className="text-white hover:text-gray-300 transition-colors p-2">
            <Mail size={28} />
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-gray-300 transition-colors"
      >
        <ArrowDown className="text-white" size={24} />
      </button>
    </section>
  )
}
