"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="min-h-auto flex items-center  py-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-primary">Frontend Developer</span> with a passion for creating exceptional user
              experiences
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              I build responsive, scalable, and accessible web applications using modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToContact}>
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">
                  View My Work <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex items-center mt-8 space-x-4">
              <a
                href="https://github.com/livinusonyenso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ugwuja-livinus-ekene-frontenddeveloper/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://x.com/livinusonyenso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-8">
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse"></div>
              <img
                src="/ugwuja.png?height=500&width=500"
                alt="Developer Portrait"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background rounded-lg shadow-lg p-4 dark:bg-card">
              <p className="text-sm font-medium">
                <span className="text-primary font-bold">3+</span> Years Experience
              </p>
            </div>
            <div className="absolute -top-6 -left-6 bg-background rounded-lg shadow-lg p-4 dark:bg-card">
              <p className="text-sm font-medium">
                <span className="text-primary font-bold">10+</span> Projects Completed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
