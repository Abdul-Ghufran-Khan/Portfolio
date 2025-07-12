import { Code, Smartphone, Palette, Globe, Zap, Server } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      hoverColor: "hover:border-blue-500/50",
      skills: [
        { name: "React & Next.js", level: 95, color: "bg-blue-500" },
        { name: "TypeScript", level: 90, color: "bg-blue-400" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
        { name: "Vue.js", level: 85, color: "bg-cyan-400" },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      hoverColor: "hover:border-green-500/50",
      skills: [
        { name: "Node.js", level: 88, color: "bg-green-500" },
        { name: "Python", level: 82, color: "bg-green-400" },
        { name: "PostgreSQL", level: 85, color: "bg-emerald-500" },
        { name: "MongoDB", level: 80, color: "bg-emerald-400" },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      hoverColor: "hover:border-purple-500/50",
      skills: [
        { name: "React Native", level: 85, color: "bg-purple-500" },
        { name: "Flutter", level: 78, color: "bg-purple-400" },
        { name: "Swift", level: 75, color: "bg-pink-500" },
        { name: "Kotlin", level: 70, color: "bg-pink-400" },
      ],
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      hoverColor: "hover:border-orange-500/50",
      skills: [
        { name: "Figma", level: 90, color: "bg-orange-500" },
        { name: "Adobe XD", level: 85, color: "bg-orange-400" },
        { name: "Prototyping", level: 88, color: "bg-red-500" },
        { name: "User Research", level: 82, color: "bg-red-400" },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <Globe className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      hoverColor: "hover:border-indigo-500/50",
      skills: [
        { name: "AWS", level: 85, color: "bg-indigo-500" },
        { name: "Docker", level: 80, color: "bg-indigo-400" },
        { name: "Kubernetes", level: 75, color: "bg-blue-600" },
        { name: "CI/CD", level: 82, color: "bg-blue-500" },
      ],
    },
    {
      title: "Performance & Testing",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
      hoverColor: "hover:border-yellow-500/50",
      skills: [
        { name: "Web Optimization", level: 92, color: "bg-yellow-500" },
        { name: "Jest Testing", level: 88, color: "bg-yellow-400" },
        { name: "Lighthouse", level: 90, color: "bg-amber-500" },
        { name: "Load Testing", level: 85, color: "bg-amber-400" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500/8 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into reality with cutting-edge technologies and creative solutions
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group relative bg-gray-900/40 backdrop-blur-sm p-8 rounded-3xl border ${category.borderColor} ${category.hoverColor} transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl`}
              style={{
                animationDelay: `${categoryIndex * 150}ms`,
              }}
            >
              {/* Enhanced Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
              ></div>

              {/* Enhanced Icon Header */}
              <div className="relative z-10 mb-8">
                <div
                  className={`w-20 h-20 ${category.bgColor} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <div className={`text-transparent bg-gradient-to-r ${category.color} bg-clip-text`}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Enhanced Skills List */}
              <div className="relative z-10 space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 font-bold px-2 py-1 bg-gray-800/50 rounded-full">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Enhanced Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-gray-800/60 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                        <div
                          className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden shadow-lg`}
                          style={{ width: `${skill.level}%` }}
                        >
                          {/* Enhanced Shimmer Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Technology Tags */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Technologies I Master
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              "JavaScript",
              "Python",
              "React",
              "Node.js",
              "Docker",
              "AWS",
              "Git",
              "Figma",
              "GraphQL",
              "Redis",
              "Webpack",
              "Jest",
              "Prisma",
              "Supabase",
              "Vercel",
              "Firebase",
              "MongoDB",
              "PostgreSQL",
            ].map((tech, index) => (
              <span
                key={tech}
                className="group px-6 py-3 bg-gray-900/40 backdrop-blur-sm text-gray-300 rounded-2xl border border-gray-800 hover:border-gray-600 hover:bg-gray-800/60 hover:text-white transition-all duration-300 hover:transform hover:scale-105 cursor-pointer hover:shadow-lg"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="relative z-10">{tech}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
