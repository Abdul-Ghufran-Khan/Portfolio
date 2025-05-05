import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Code, Github, Laptop, Mail, Phone, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-20">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 font-bold text-xl">Portfolio</div>
          <nav className="flex items-center space-x-6 text-sm font-medium flex-1 justify-end">
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
        <section className="py-20 md:py-28 container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Hi, I&apos;m <span className="text-primary">Abdul Ghufran</span>
              </h1>
              <p className="text-xl text-muted-foreground">Web & App Developer</p>
              <p className="text-muted-foreground max-w-md">
                I build exceptional digital experiences that are fast, accessible, and responsive on all devices.
              </p>
              <div className="flex gap-4 pt-4">
                <Button>
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href={"#contact"}>
                <Button variant="outline">Contact Me</Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary/20">
                <Image src="/placeholder.svg?height=300&width=300" alt="Profile" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-40">
              <div>
                <p className="text-muted-foreground mb-4">
                I&apos;m a dedicated web and mobile app developer with about one year of hands-on experience creating responsive and user-friendly digital solutions. As a Computer Science student, I&apos;ve built a strong foundation in software development and enjoy working with technologies like React, Next.js, Node.js, and Flutter. I&apos;m passionate about both front-end and back-end development and love turning ideas into functional, real-world applications.
                </p>
                <p className="text-muted-foreground">
                I&apos;m always eager to learn and take on new challenges that push my skills further. Whether collaborating in a team or working independently, I focus on writing clean, maintainable code and delivering meaningful digital experiences. With a blend of academic knowledge and practical experience, I&apos;m committed to growing as a developer and making a positive impact through technology.
                </p>
              </div>
              <div className="space-y-14">
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
        <section id="skills" className="py-16 container">
          <h2 className="text-3xl font-bold mb-8">My Skills</h2>

          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2">
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="app">App Development</TabsTrigger>
            </TabsList>
            <TabsContent value="web" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Express"].map(
                  (skill) => (
                    <Card key={skill}>
                      <CardContent className="flex items-center justify-center p-6">
                        <span>{skill}</span>
                      </CardContent>
                    </Card>
                  ),
                )}
              </div>
            </TabsContent>
            <TabsContent value="app" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store", "Google Play", "CI/CD"].map(
                  (skill) => (
                    <Card key={skill}>
                      <CardContent className="flex items-center justify-center p-6">
                        <span>{skill}</span>
                      </CardContent>
                    </Card>
                  ),
                )}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Recent Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "E-commerce Website",
                  type: "Web Development",
                  image: "/placeholder.svg?height=200&width=300",
                },
                { title: "Fitness App", type: "Mobile App", image: "/placeholder.svg?height=200&width=300" },
                { title: "Portfolio Site", type: "Web Development", image: "/placeholder.svg?height=200&width=300" },
                { title: "Task Manager", type: "Web & Mobile", image: "/placeholder.svg?height=200&width=300" },
                {
                  title: "Restaurant Booking",
                  type: "Web Development",
                  image: "/placeholder.svg?height=200&width=300",
                },
                { title: "Travel Guide App", type: "Mobile App", image: "/placeholder.svg?height=200&width=300" },
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                    <Button variant="link" className="p-0 h-auto mt-2">
                      View Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 container">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-10">
              <p className="text-muted-foreground">
                I&apos;m currently available for freelance work. If you have a project that needs some creative touch, don't
                hesitate to reach out.
              </p>
              <div className="space-y-10">
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
                <Button variant="outline" size="icon">
                  <Link href={"https://github.com/Abdul-Ghufran-Khan"}>
                  <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon">
                  <Link href={"mailto:abdulghufran267@gmail.com"}>
                  <Mail className="h-5 w-5" />
                  </Link>
                </Button>
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
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">
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
