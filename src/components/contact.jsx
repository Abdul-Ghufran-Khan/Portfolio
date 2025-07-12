import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send, MessageCircle, Calendar, Star } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's create something extraordinary together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="mb-12">
              <h3 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let's start a conversation
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. Whether you have a
                question, want to discuss a project, or just want to say hello, I'd love to hear from you.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-12">
                <div className="text-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800">
                  <div className="text-2xl font-bold text-white mb-1">24h</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800">
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800">
                  <div className="text-2xl font-bold text-white mb-1">5★</div>
                  <div className="text-sm text-gray-400">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="group flex items-center gap-6 p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg mb-1">Email Me</div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors">abdulghufran267@gmail.com</div>
                  <div className="text-sm text-purple-400 mt-1">Usually responds within 2 hours</div>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg mb-1">Call Me</div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors">+92 (370) 4291806</div>
                  <div className="text-sm text-blue-400 mt-1">Available Mon-Fri, 9AM-6PM PST</div>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg mb-1">Schedule a Call</div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    Book a free consultation
                  </div>
                  <div className="text-sm text-yellow-400 mt-1">30-minute discovery call</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            {/* Form Container */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 relative overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl"></div>

              {/* Form Header */}
              <div className="relative z-10 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Send me a message</h3>
                </div>
                <p className="text-gray-400">Fill out the form below and I'll get back to you as soon as possible.</p>
              </div>

              {/* Form */}
              <form className="relative z-10 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <Input
                      placeholder="First Name"
                      className="border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20 h-12 rounded-xl transition-all duration-300 group-hover:border-gray-600"
                    />
                  </div>
                  <div className="group">
                    <Input
                      placeholder="Last Name"
                      className="border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20 h-12 rounded-xl transition-all duration-300 group-hover:border-gray-600"
                    />
                  </div>
                </div>

                <div className="group">
                  <Input
                    placeholder="Email Address"
                    type="email"
                    className="border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20 h-12 rounded-xl transition-all duration-300 group-hover:border-gray-600"
                  />
                </div>

                <div className="group">
                  <Input
                    placeholder="Subject"
                    className="border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20 h-12 rounded-xl transition-all duration-300 group-hover:border-gray-600"
                  />
                </div>

                <div className="group">
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="border-gray-700 bg-gray-800/50 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl resize-none transition-all duration-300 group-hover:border-gray-600"
                  />
                </div>

                {/* Project Type Selection */}
                <div>
                  <p className="text-sm text-gray-400 mb-3">What type of project is this?</p>
                  <div className="grid grid-cols-2 gap-3">
                    {["Web Development", "Mobile App", "UI/UX Design", "Consultation"].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 p-3 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-gray-600 cursor-pointer transition-all duration-300 hover:bg-gray-800/50"
                      >
                        <input type="checkbox" className="text-purple-500 rounded" />
                        <span className="text-sm text-gray-300">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-4 text-lg rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  <Send size={20} />
                  Send Message
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                </Button>
              </form>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-60"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute -z-10 bottom-10 -left-10 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Bottom Section - Social Proof */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <div className="text-gray-400 text-lg">
            <p className="text-center text-md text-muted-foreground">
              © {new Date().getFullYear()} Abdul Ghufran. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
