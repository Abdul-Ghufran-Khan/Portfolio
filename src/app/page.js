import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Code, Github, Laptop, Mail, Phone, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen container mx-auto">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <div className="mr-4 font-bold text-xl">Portfolio</div>
          <nav className="flex items-center space-x-4 sm:space-x-6 text-sm font-medium flex-1 justify-end">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">
              Skills
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 container px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Hi I am <span className="text-primary">Abdul Ghufran</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">Web & App Developer</p>
              <p className="text-muted-foreground max-w-xl mx-auto md:mx-0">
                I build exceptional digital experiences that are fast, accessible and responsive on all devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <Link href="#projects">
                  <Button>
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline">Contact Me</Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary/20">
                <Image src="/placeholder.svg?height=300&width=300" alt="Profile" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left">About Me</h2>
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a dedicated web and mobile app developer with about one year of hands-on experience creating
                  responsive and user-friendly digital solutions. As a Computer Science student I have built a strong
                  foundation in software development and enjoy working with technologies like React, Next.js, Node.js,
                  and Flutter.
                </p>
                <p>
                  I am always eager to learn and take on new challenges that push my skills further. Whether collaborating
                  in a team or working independently, I focus on writing clean maintainable code and delivering meaningful
                  digital experiences.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-primary" />
                  <span>1+ years of development experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Laptop className="h-5 w-5 text-primary" />
                  <span>20+ websites developed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <span>10+ mobile applications</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <span>Open source contributor</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 container px-4">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">My Skills</h2>
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto mb-6">
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="app">App Development</TabsTrigger>
            </TabsList>
            <TabsContent value="web">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Express"].map(
                  (skill) => (
                    <Card key={skill}>
                      <CardContent className="flex items-center justify-center p-6">
                        <span>{skill}</span>
                      </CardContent>
                    </Card>
                  )
                )}
              </div>
            </TabsContent>
            <TabsContent value="app">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store", "Google Play", "CI/CD"].map(
                  (skill) => (
                    <Card key={skill}>
                      <CardContent className="flex items-center justify-center p-6">
                        <span>{skill}</span>
                      </CardContent>
                    </Card>
                  )
                )}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Recent Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Real-Estate", type: "Web Development", image: "/img/Real-estate.JPG?height=200&width=300", link: "https://real-estate-hazel.vercel.app" },
                { title: "SMIT Microfinance", type: "Web Development", image: "/img/SMIT.JPG?height=200&width=300", link: "https://smit-microfinance.netlify.app/" },
                { title: "Doctor Appointment system", type: "Web Development", image: "/img/Doctor-appointment.JPG?height=200&width=300", link: "https://doctor-appointment-system-teal.vercel.app/" },
                { title: "Task Manager", type: "Web & Mobile", image: "/placeholder.svg?height=200&width=300", link: "https://real-estate-hazel.vercel.app" },
                { title: "Restaurant Booking", type: "Web Development", image: "/placeholder.svg?height=200&width=300", link: "https://real-estate-hazel.vercel.app" },
                { title: "Travel Guide App", type: "Mobile App", image: "/placeholder.svg?height=200&width=300", link: "https://real-estate-hazel.vercel.app" },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                    {project.link && (
                      <Link href={project.link}>
                        <Button variant="link" className="p-0 h-auto mt-2">
                          View Details <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    )}

                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 container px-4">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Get In Touch</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8 text-muted-foreground">
              <p>
                I am currently available for freelance work. If you have a project that needs some creative touch, do not
                hesitate to reach out.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>abdulghufran267@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+92 (370) 2491806</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="https://github.com/Abdul-Ghufran-Khan" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="mailto:abdulghufran267@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="input p-2 rounded-lg"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="input p-2 rounded-lg"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="textarea p-2 rounded-lg  "
                      placeholder="Your message"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0 px-4">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Abdul Ghufran. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
