"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, BookOpen, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    id: 1,
    title: "Droid Technologies HQ",
    description:
      "Rebuilt the frontend architecture from scratch,cut UI bugs by 30% and improved page load speed by 20%. The site now performs like the tech company it represents.",
    image: "/D-roid-Technologies-Ltd-Custom-Software-AI-and-Digital-Innovation.png",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://droidtechhq.com/",
    githubUrl: "https://github.com/yourusername/droidtechhq",
    category: "featured",
    role: "Lead Frontend Developer",
    contribution:
      "Owned the full frontend overhaul: restructured component architecture, enforced responsive layouts across all breakpoints, and optimized asset delivery for measurable speed gains.",
  },
  {
    id: 2,
    title: "Adaba Coconut Farm Resort",
    description:
      "Turned a slow, broken-on-mobile resort site into a fast, polished experience that converts visitors into bookings.",
    image: "/Àdàbà-Coconut-Farm-Resort.png",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://adabafarmresort.com/",
    githubUrl: "https://github.com/yourusername/adaba-farm-resort",
    category: "featured",
    role: "Frontend Developer",
    contribution:
      "Rebuilt the UI from the ground up, fixed mobile responsiveness across all device sizes, and reduced load time,making the browsing and booking flow smooth and friction-free.",
  },
  {
  id: 112,
  title: "Ontime Maritime",
  description:
    "Frontend for a global logistics platform serving 5,000+ companies across 150+ countries. Built to handle enterprise-scale traffic without cracking under pressure.",
  image: "/ontime-maritime.png",
  tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  liveUrl: "https://ontimemaritime.com/",
  githubUrl: "",
  category: "featured",
  role: "Frontend Developer",
  contribution:
    "Architected a performant, scalable frontend for a high-traffic maritime logistics platform,optimized for cross-device reliability and built to hold up at global scale.",
},
 {
  id: 222,
  title: "Codedlng",
  description:
    "Built the web presence for a premium business coaching platform selling the 90-Day Freedom System™,clean, fast, and designed to convert serious entrepreneurs.",
  image: "/codedlng.png",
  tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  liveUrl: "https://codedlng.com/",
  githubUrl: "",
  category: "featured",
  role: "UI/Frontend Developer",
  contribution:
    "Designed and built a high-converting frontend that clearly communicates a premium offer,fast load times, sharp UI, and a user flow built to reduce drop-off and drive sign-ups.",
},
  
  {
    id: 3,
    title: "Kazfield International Services Ltd",
    description:
      "Modernized a real estate company's digital presence,clean UI, clear navigation, and a layout built to move property seekers toward action.",
    image: "/Kazfield-real-estate.png",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://kazfieldisl.com/",
    githubUrl: "",
    category: "featured",
    role: "Frontend Developer",
    contribution:
      "Led a complete UI redesign,replaced outdated layouts with component-driven architecture, improved information hierarchy, and cut friction in the property browsing experience.",
  },
  {
    id: 7,
    title: "DroidOne Mobile App",
    description:
      "Designed, built, and shipped a mobile app end-to-end,live on the Google Play Store. Proof that I can own the full mobile development lifecycle, not just the UI layer.",
    image: "/D'roid.png",
    tags: ["React Native", "Android", "Mobile", "JavaScript"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.devekene.DroidOne",
    githubUrl: "",
    category: "mobile",
    role: "React Native Developer",
    contribution:
      "Owned everything: UI/UX design, React Native development, testing across Android devices, and Play Store deployment. Zero handoffs,shipped it myself.",
  },
  {
    id: 4,
    title: "SkillLift",
    description:
      "Fixed broken mobile UX and accessibility gaps,drove a 15% increase in mobile user retention. Small fixes, real numbers.",
    image: "/skillLift-com.png",
    tags: ["React", "Redux", "SCSS", "JavaScript"],
    liveUrl: "https://skillliftcom.vercel.app/",
    githubUrl: "",
    category: "featured",
    role: "Frontend Engineer",
    contribution:
      "Audited and rebuilt responsive layouts, closed accessibility gaps that were costing users, and integrated backend APIs to complete the feature loop,measurable retention improvement as the result.",
  },
  {
    id: 5,
    title: "Nanxtyles E-commerce Store",
    description:
      "Full-featured e-commerce store with real-time inventory and live sales analytics,so the owner always knows what's selling and what isn't.",
    image: "/nanxtyles-clothing-shop.png",
    tags: ["React", "Firebase", "Material UI", "Chart.js"],
    liveUrl: "https://nanxtyles.com/",
    githubUrl: "",
    category: "web",
    role: "Frontend Developer (Freelance)",
    contribution:
      "Built the full dashboard UI, wired up Chart.js analytics for live sales visibility, and integrated Firebase for real-time inventory updates,giving the business owner actionable data at a glance.",
  },
  {
    id: 6,
    title: "Wedding Seating App",
    description:
      "A clean, focused tool for wedding planners to manage guest seating without the spreadsheet chaos,built solo from design to deployment.",
    image: "/wedding-Seating-App.png",
    tags: ["React", "JavaScript", "CSS"],
    liveUrl: "https://wedding-seating-app.vercel.app/",
    githubUrl: "",
    category: "web",
    role: "Solo Developer",
    contribution:
      "Designed and built the entire application solo,prioritized simplicity and usability so non-technical users could pick it up instantly with zero training.",
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
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
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
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setModalOpen(true)}
              className="flex items-center border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Case Study
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

      {modalOpen && (
        <CaseStudyModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-background rounded-2xl shadow-2xl max-w-lg w-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-6">{project.description}</p>

        <div className="space-y-5">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">My Role</h4>
            <p className="text-sm text-muted-foreground">{project.role}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Contribution</h4>
            <p className="text-sm text-muted-foreground">{project.contribution}</p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Button size="sm" asChild className="w-full">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <ExternalLink className="mr-2 h-4 w-4" />
              {project.category === "mobile" ? "View on Play Store" : "View Live Demo"}
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
