"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Users } from "lucide-react"

export default function Projects() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const projects = [
    {
      title: "Real Estate Website",
      description:
        "A comprehensive full-stack e-commerce solution featuring secure payment integration, real-time inventory management, and an intuitive admin dashboard. Built with modern technologies for optimal performance.",
      image: "/img/Real-estate.JPG",
      tech: ["React.js", "Javascript", "Stripe", "Mongodb", "Tailwind"],
      github: "#",
      live: "https://real-estate-hazel.vercel.app/",
      featured: true,
      category: "Full Stack",
      duration: "3 months",
      team: "Solo Project",
      status: "Live",
      highlights: ["Payment Integration", "Admin Dashboard", "Real-time Updates"],
    },
    {
      title: "Doctor Appointment System",
      description:
        "Collaborative project management tool with real-time updates, team chat functionality, and advanced progress tracking. Features include drag-and-drop task organization and team collaboration tools.",
      image: "/img/Doctor-appointment.JPG",
      tech: ["Next.js", "Node.js", "Socket.io", "MongoDB", "Express"],
      github: "#",
      live: "https://doctor-appointment-system-teal.vercel.app/",
      featured: true,
      category: "Web App",
      duration: "2 months",
      team: "2 Developers",
      status: "Live",
      highlights: ["Real-time Chat", "Drag & Drop", "Team Collaboration"],
    },
    {
      title: "AL-Misbah",
      description:
        "Advanced analytics platform with machine learning insights, interactive data visualizations, and predictive analytics. Processes large datasets to provide actionable business intelligence.",
      image: "/img/project.JPG",
      tech: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
      github: "#",
      live: "https://al-misbah-changes.netlify.app",
      featured: true,
      category: "AI/ML",
      duration: "4 months",
      team: "3 Developers",
      status: "Live",
      highlights: ["Machine Learning", "Data Visualization", "Predictive Analytics"],
    },
    {
      title: "Solar Saver",
      description:
        "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools. Built with React Native for cross-platform compatibility.",
      image: "/img/Solar-saver.JPG",
      tech: ["React Native", "Node.js", "MongoDB", "JWT", "Stripe"],
      github: "#",
      live: "https://solar-saver-react.netlify.app",
      featured: true,
      category: "Mobile",
      duration: "5 months",
      team: "4 Developers",
      status: "Live",
      highlights: ["Biometric Auth", "Real-time Transactions", "Financial Tools"],
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-24 px-4 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/8 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work and innovative solutions that demonstrate technical expertise and creative
            problem-solving
          </p>
        </div>

        {/* Enhanced Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Project Image with Overlay */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30 backdrop-blur-sm">
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Quick Action Buttons */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 p-2"
                  >
                    <Github size={16} />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-blue-500/20 backdrop-blur-sm text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 p-2"
                  >
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-8">
                {/* Project Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>
                </div>

                {/* Project Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Meta Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{project.team}</span>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white flex-1"
                  >
                    <Github size={16} />
                    View Code
                  </Button>
                  <Button
                    onClick={() => window.open(project.live, "_blank")}
                    size="sm"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white flex-1"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Lets collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
