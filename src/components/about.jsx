export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">About Me</h2>
          <div className="h-1 w-16 bg-white mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate full-stack developer with over 5 years of experience creating digital solutions that make
              a difference. I specialize in modern web technologies and love turning complex problems into simple,
              beautiful designs.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a career focused on creating meaningful
              user experiences. I believe in writing clean, maintainable code and staying up-to-date with the latest
              industry trends.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Problem Solver</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Team Player</span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm">Continuous Learner</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-white mb-2">20+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
