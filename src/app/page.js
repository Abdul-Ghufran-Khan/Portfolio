import Hero from "../components/hero.jsx"
import About from "../components/about.jsx"
import Skills from "../components/skills.jsx"
import Certifications from "../components/certifications.jsx"
import Projects from "../components/projects.jsx"
import Contact from "../components/contact.jsx"
import Navigation from "../components/navigation.jsx"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  )
}
