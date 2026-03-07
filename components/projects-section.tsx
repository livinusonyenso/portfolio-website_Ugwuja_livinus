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
    title: "Droid Technologies HQ",
    description:
      "Optimized frontend architecture, reducing UI issues by 30% and improving page load speed by 20%.",
    image: "/D-roid-Technologies-Ltd-Custom-Software-AI-and-Digital-Innovation.png",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://droidtechhq.com/",
    githubUrl: "https://github.com/yourusername/droidtechhq",
    category: "featured",
    role: "Lead Frontend Developer",
    contribution:
      "Redesigned the UI/UX, implemented responsive layouts, and optimized performance.",
  },
  {
    id: 2,
    title: "Adaba Coconut Farm Resort",
    description:
      "Improved site performance and responsiveness, delivering a smooth booking and browsing experience.",
    image: "/Àdàbà-Coconut-Farm-Resort.png",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://adabafarmresort.com/",
    githubUrl: "https://github.com/yourusername/adaba-farm-resort",
    category: "featured",
    role: "Lead Frontend Developer",
    contribution:
      "Redesigned the interface, enhanced mobile responsiveness, and optimized loading speed.",
  },
  {
  id: 112,
  title: "Ontime Maritime",
  description:
    "A digital logistics platform modernizing global cargo shipping. Founded in 2020, Ontime Maritime supports 5,000+ companies across 150+ countries, processing millions of containers annually.",
  image: "/ontime-maritime.png",
  tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  liveUrl: "https://ontimemaritime.com/",
  githubUrl: "https://github.com/yourusername/ontime-maritime",
  category: "featured",
  role: "Lead Frontend Developer",
  contribution:
    "Built and optimized the frontend for a maritime logistics platform serving global supply chains — improving responsiveness, performance, and user experience across 150+ countries.",
},
 {
  id: 222,
  title: "Codedlng",
  description:
    "A structured business systemization platform offering the 90-Day Freedom System™ — helping entrepreneurs turn chaotic operations into self-running businesses using workflows, SOPs, dashboards, and automation.",
  image: "/codedlng.png",
  tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  liveUrl: "https://codedlng.com/",
  githubUrl: "https://github.com/yourusername/codedlng",
  category: "featured",
  role: "Lead Frontend Developer",
  contribution:
    "Built and optimized the frontend for a business coaching platform, delivering a clean, responsive experience that clearly communicates the 90-Day Freedom System™ program to its audience.",
},
  
  {
    id: 3,
    title: "Kazfield International Services Ltd",
    description:
      "Built a modern real estate website with optimized UI and improved user navigation.",
    image: "/Kazfield-real-estate.png",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://kazfieldisl.com/",
    githubUrl: "https://github.com/yourusername/kazfieldisl",
    category: "featured",
    role: "Lead Frontend Developer",
    contribution:
      "Led UI redesign, implemented responsive components, and improved performance.",
  },
  {
    id: 7,
    title: "DroidOne Mobile App",
    description:
      "A mobile application developed and published on the Google Play Store, delivering a seamless and intuitive user experience.",
    image: "/D'roid.png",
    tags: ["React Native", "Android", "Mobile", "JavaScript"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.devekene.DroidOne",
    githubUrl: "https://github.com/yourusername/droidone",
    category: "mobile",
    role: "Mobile Developer",
    contribution:
      "Designed and developed the full mobile application, from UI design to deployment on the Google Play Store.",
  },
  {
    id: 4,
    title: "SkillLift",
    description:
      "Improved accessibility and responsive design, leading to a 15% increase in mobile user retention.",
    image: "/skillLift-com.png",
    tags: ["React", "Redux", "SCSS", "JavaScript"],
    liveUrl: "https://skillliftcom.vercel.app/",
    githubUrl: "https://github.com/yourusername/skilllift",
    category: "featured",
    role: "Frontend Developer",
    contribution:
      "Enhanced accessibility, built responsive layouts, and integrated backend APIs.",
  },
  {
    id: 5,
    title: "Nanxtyles E-commerce Store",
    description:
      "Developed a full-featured shopping store with real-time inventory tracking and sales insights.",
    image: "/nanxtyles-clothing-shop.png",
    tags: ["React", "Firebase", "Material UI", "Chart.js"],
    liveUrl: "https://nanxtyles.com/",
    githubUrl: "https://github.com/yourusername/nanxtyles-store",
    category: "web",
    role: "Frontend Developer",
    contribution:
      "Built the dashboard UI, implemented analytics charts, and integrated Firebase services.",
  },
  {
    id: 6,
    title: "Wedding Seating App",
    description:
      "Designed and built a user-friendly wedding seating application to simplify guest arrangement and event planning.",
    image: "/wedding-Seating-App.png",
    tags: ["React", "JavaScript", "CSS"],
    liveUrl: "https://wedding-seating-app.vercel.app/",
    githubUrl: "https://github.com/yourusername/wedding-seating-app",
    category: "web",
    role: "Frontend Developer",
    contribution:
      "Designed and developed the entire application with a focus on usability and simplicity.",
  },
  
];

type Project = (typeof projects)[number];

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
                <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
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
            <TabsContent value="mobile" className="mt-0">
              <ProjectGrid projects={filteredProjects} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
              {project.category === "mobile" ? "Play Store" : "Live Demo"}
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
