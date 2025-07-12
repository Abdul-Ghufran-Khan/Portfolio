"use client"

import { useState } from "react"
import { Award, ExternalLink, Download, CheckCircle, Star, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Certifications() {
  const [selectedBadge, setSelectedBadge] = useState(null)
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const openBadgeModal = (cert) => {
    setSelectedBadge(cert)
  }

  const closeBadgeModal = () => {
    setSelectedBadge(null)
  }

  const openCertificateModal = (cert) => {
    setSelectedCertificate(cert)
  }

  const closeCertificateModal = () => {
    setSelectedCertificate(null)
  }

  const certifications = [
    {
      title: "JavaScript Essentials",
      issuer: "Cisco Networking Academy",
      date: "2025",
      type: "Professional Certificate",
      description:
        "Comprehensive certification covering JavaScript fundamentals, ES6+ features, DOM manipulation, and modern web development practices.",
      skills: ["JavaScript ES6+", "DOM Manipulation", "Async Programming", "Web APIs", "Modern JS Frameworks"],
      credentialId: "CISCO-JS-2024-001",
      image: "/img/Ciscocerti.jpg",
      badge: "/img/CISCOBADGE.png",
      hasBadge: true,
      verified: true,
      category: "Programming",
      level: "Intermediate",
      hours: "40 Hours",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      title: "Web & Mobile App Development",
      issuer: "Saylani Mass IT Program",
      date: "2024",
      type: "Bootcamp Certificate",
      description:
        "Intensive full-stack development program covering modern web technologies, mobile app development, and industry best practices.",
      skills: ["React.js", "Node.js", "React Native","Next.js", "MongoDB", "Full-Stack Development", "Mobile Development"],
      credentialId: "SMIT-WMA-214725",
      image: "/img/Certi-saylani.jpg",
      badge: null,
      hasBadge: false,
      verified: true,
      category: "Full-Stack",
      level: "Advanced",
      hours: "300+ Hours",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
  ]

  return (
    <section id="certifications" className="py-24 px-4 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500/8 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Validated expertise through industry-recognized certifications and comprehensive training programs
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/40 backdrop-blur-sm rounded-3xl overflow-hidden border ${cert.borderColor} hover:border-gray-600/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10`}
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Certificate Image - Now Clickable */}
              <div className="relative overflow-hidden h-64">
                <button
                  onClick={() => openCertificateModal(cert)}
                  className="w-full h-full cursor-pointer group/cert"
                  title="Click to view certificate"
                >
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover/cert:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent group-hover/cert:from-gray-900/80"></div>

                  {/* Click Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </button>

                {/* Verified Badge */}
                {cert.verified && (
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30 backdrop-blur-sm">
                      <CheckCircle className="w-4 h-4" />
                      Verified
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 pointer-events-none">
                  <span
                    className={`px-3 py-1 bg-gradient-to-r ${cert.color} bg-opacity-20 text-white text-sm font-medium rounded-full border border-white/20 backdrop-blur-sm`}
                  >
                    {cert.category}
                  </span>
                </div>

                {/* Certificate Badge - Only for Cisco */}
                {cert.hasBadge && (
                  <div className="absolute bottom-4 left-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        openBadgeModal(cert)
                      }}
                      className="group/badge w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer"
                      title="Click to view badge"
                    >
                      <img
                        src={cert.badge || "/placeholder.svg"}
                        alt={`${cert.issuer} Badge`}
                        className="w-12 h-12 object-contain group-hover/badge:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                )}

                {/* Institution Logo for Saylani (without badge container) */}
                {!cert.hasBadge && (
                  <div className="absolute bottom-4 left-4 pointer-events-none">
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700/50">
                      <div className={`w-8 h-8 ${cert.bgColor} rounded-lg flex items-center justify-center`}>
                        <Award className={`w-5 h-5 text-transparent bg-gradient-to-r ${cert.color} bg-clip-text`} />
                      </div>
                      <span className="text-white text-sm font-medium">SMIT</span>
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 p-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                  </Button>
                  <Button
                    size="sm"
                    className="bg-blue-500/20 backdrop-blur-sm text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 p-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Download size={16} />
                  </Button>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${cert.bgColor} rounded-2xl flex items-center justify-center`}>
                        <Award className={`w-6 h-6 text-transparent bg-gradient-to-r ${cert.color} bg-clip-text`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                          {cert.title}
                        </h3>
                        <p className="text-gray-400 font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">{cert.date}</div>
                      <div className="text-sm text-gray-400">{cert.type}</div>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{cert.description}</p>
                </div>

                {/* Certificate Details */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-800/30 rounded-xl">
                    <div className="text-white font-semibold text-sm">{cert.level}</div>
                    <div className="text-xs text-gray-400">Level</div>
                  </div>
                  <div className="text-center p-3 bg-gray-800/30 rounded-xl">
                    <div className="text-white font-semibold text-sm">{cert.hours}</div>
                    <div className="text-xs text-gray-400">Duration</div>
                  </div>
                  <div className="text-center p-3 bg-gray-800/30 rounded-xl">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold text-sm">5.0</span>
                    </div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                </div>

                {/* Skills Covered */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 bg-gradient-to-r ${cert.color} bg-opacity-10 text-white text-sm rounded-full border border-white/10 hover:border-white/20 transition-colors`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="mb-6 p-3 bg-gray-800/30 rounded-xl">
                  <div className="text-xs text-gray-400 mb-1">Credential ID</div>
                  <div className="text-sm text-white font-mono">{cert.credentialId}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {cert.hasBadge ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white flex-1"
                    >
                      <ExternalLink size={16} />
                      Verify
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white flex-1"
                    >
                      <ExternalLink size={16} />
                      View Program
                    </Button>
                  )}
                  <Button
                    size="sm"
                    className={`flex items-center gap-2 bg-gradient-to-r ${cert.color} hover:opacity-90 text-white flex-1`}
                  >
                    <Download size={16} />
                    Download
                  </Button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div
                className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${cert.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <div className="text-3xl font-bold text-white mb-2">2+</div>
            <div className="text-gray-400">Certifications</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <div className="text-3xl font-bold text-white mb-2">340+</div>
            <div className="text-gray-400">Learning Hours</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">Completion Rate</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <div className="text-3xl font-bold text-white mb-2">5.0</div>
            <div className="text-gray-400">Average Score</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Continuous Learning</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I believe in staying current with the latest technologies and best practices through continuous learning
              and professional development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                View All Certificates
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                Download Portfolio
              </Button>
            </div>
          </div>
        </div>

        {/* Badge Modal */}
        {selectedBadge && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4 pt-24"
            onClick={closeBadgeModal}
          >
            <div
              className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeBadgeModal}
                className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-gray-700/50 transition-colors"
              >
                <X size={16} />
              </button>

              {/* Modal Content */}
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedBadge.title}</h3>
                  <p className="text-lg text-gray-400">{selectedBadge.issuer}</p>
                </div>

                {/* Smaller Badge Display */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-32 h-32 bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-600/50 flex items-center justify-center p-4">
                      <img
                        src={selectedBadge.badge || "/placeholder.svg"}
                        alt={`${selectedBadge.issuer} Badge`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl"></div>
                  </div>
                </div>

                {/* Compact Badge Details */}
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="bg-gray-800/30 p-3 rounded-xl">
                    <div className="text-xs text-gray-400 mb-1">Issued Date</div>
                    <div className="text-white font-semibold text-sm">{selectedBadge.date}</div>
                  </div>
                  <div className="bg-gray-800/30 p-3 rounded-xl">
                    <div className="text-xs text-gray-400 mb-1">Credential ID</div>
                    <div className="text-white font-mono text-xs">{selectedBadge.credentialId}</div>
                  </div>
                </div>

                {/* Compact Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Skills Validated</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedBadge.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-1 bg-gradient-to-r ${selectedBadge.color} bg-opacity-10 text-white text-xs rounded-full border border-white/10`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Compact Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white flex-1 text-xs"
                  >
                    <ExternalLink size={14} />
                    Verify
                  </Button>
                  <Button
                    size="sm"
                    className={`flex items-center gap-2 bg-gradient-to-r ${selectedBadge.color} hover:opacity-90 text-white flex-1 text-xs`}
                  >
                    <Download size={14} />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4 pt-24"
            onClick={closeCertificateModal}
          >
            <div
              className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeCertificateModal}
                className="absolute top-3 right-3 z-10 w-8 h-8 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-gray-700/50 transition-colors"
              >
                <X size={16} />
              </button>

              {/* Modal Content */}
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedCertificate.title}</h3>
                  <p className="text-lg text-gray-400">{selectedCertificate.issuer}</p>
                </div>

                {/* Certificate Image Display */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-full max-w-sm">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-600/50 overflow-hidden">
                      <img
                        src={selectedCertificate.image || "/placeholder.svg"}
                        alt={`${selectedCertificate.title} Certificate`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-800/30 p-3 rounded-xl">
                    <div className="text-xs text-gray-400 mb-1">Issued Date</div>
                    <div className="text-white font-semibold text-sm">{selectedCertificate.date}</div>
                  </div>
                  <div className="bg-gray-800/30 p-3 rounded-xl">
                    <div className="text-xs text-gray-400 mb-1">Type</div>
                    <div className="text-white font-semibold text-sm">{selectedCertificate.type}</div>
                  </div>
                </div>

                {/* Credential ID */}
                <div className="bg-gray-800/30 p-3 rounded-xl mb-6">
                  <div className="text-xs text-gray-400 mb-1">Credential ID</div>
                  <div className="text-white font-mono text-xs">{selectedCertificate.credentialId}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white flex-1 text-xs"
                  >
                    <ExternalLink size={14} />
                    {selectedCertificate.hasBadge ? "Verify" : "View Program"}
                  </Button>
                  <Button
                    size="sm"
                    className={`flex items-center gap-2 bg-gradient-to-r ${selectedCertificate.color} hover:opacity-90 text-white flex-1 text-xs`}
                  >
                    <Download size={14} />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
