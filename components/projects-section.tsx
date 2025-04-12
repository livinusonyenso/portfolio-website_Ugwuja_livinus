"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    id: 1,
    title: "Kazfieldisl.com",
    description: "Optimized frontend architecture, reducing UI issues by 30% and improving page load speed by 20%.",
    image: "/Kazfield-real-estate.png?height=400&width=600",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://kazfieldisl.com/",
    githubUrl: "https://github.com/yourusername/kazfieldisl",
    category: "featured",
    role: "Lead Frontend Developer",
    contribution: "Redesigned the UI/UX, implemented responsive design, and optimized performance.",
  },
  {
    id: 2,
    title: "SkillLift-com",
    description: "Improved accessibility and responsive design, leading to a 15% increase in mobile retention.",
    image: "/skillLift-com.png?height=400&width=600",
    tags: ["React", "Redux", "SCSS", "JavaScript"],
    liveUrl: "https://skillliftcom.vercel.app/",
    githubUrl: "https://github.com/yourusername/auspisprime",
    category: "featured",
    role: "Frontend Developer",
    contribution: "Enhanced accessibility, implemented responsive design, and integrated with backend APIs.",
  },
  {
    id: 3,
    title: "nanxtyles.com",
    description: "Developed a comprehensive shopping store for seamless management—featuring real-time  inventory tracking, and sales insights  and enhance decision-making.",
    image: "/nanxtyles-clothing-shop.png?height=400&width=600",
    tags: ["React", "Chart.js", "Material UI", "Firebase"],
    liveUrl: "https://nanxtyles.com/",
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    category: "web",
    role: "Frontend Developer",
    contribution: "Built the dashboard UI, implemented charts and analytics features.",
  },
  {
    id: 4,
    title: "wedding-seating-app",
    description: "Designed and built a user-friendly wedding seating app that simplifies guest arrangement and event planning.",
    image: "/wedding-Seating-App.png?height=400&width=600",
    tags: ["React", "OpenWeather API", "CSS", "JavaScript"],
    liveUrl: "https://wedding-seating-app.vercel.app/",
    githubUrl: "https://github.com/yourusername/weather-app",
    category: "web",
    role: "Developer",
    contribution: "Designed and developed the entire application, integrated with the OpenWeather API.",
  },
]

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="web">Web Apps</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
            <TabsContent value="featured" className="mt-0">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
            <TabsContent value="web" className="mt-0">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectGrid({ projects }: { projects: typeof projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-1">My Role:</h4>
            <p className="text-sm text-muted-foreground">{project.role}</p>
          </div>
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-1">Contribution:</h4>
            <p className="text-sm text-muted-foreground">{project.contribution}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
