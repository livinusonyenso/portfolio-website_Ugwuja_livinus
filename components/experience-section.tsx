"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "TechPem",
    location: "Remote",
    period: "Jan 2023 - may 2024",
    description:
      "Leading frontend development for client projects, implementing responsive designs, and optimizing performance.",
    achievements: [
      "Reduced UI issues by 30% through improved architecture",
      "Improved page load speed by 20% through optimization techniques",
      "Implemented accessibility standards across all projects",
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "ISONG Technologies",
    location: "Remote",
    period: "july 2024 - may 2025",
    description:
      "Assisted in developing and maintaining web applications, focusing on UI/UX improvements and bug fixes.",
    achievements: [
      "Contributed to 5+ client projects",
      "Improved mobile responsiveness across all applications",
      "Collaborated with design team to implement UI improvements",
    ],
    skills: ["React", "JavaScript", "CSS", "Bootstrap"],
  },
  {
    id: 3,
    role: "Participant",
    company: "3MTT Software Development Program",
    location: "Remote",
    period: "Sep 2024 - Dec 2024",
    description: "Participating in an intensive software development program, specializing in JavaScript and Node.js.",
    achievements: [
      "Completed advanced JavaScript modules with distinction",
      "Developed full-stack applications as part of coursework",
      "Collaborated with peers on group projects",
    ],
    skills: ["JavaScript", "Node.js", "Express", "MongoDB"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <CardTitle>{experience.role}</CardTitle>
              <CardDescription className="text-lg font-medium mt-1">{experience.company}</CardDescription>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <CalendarDays className="mr-1 h-4 w-4" />
                {experience.period}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                {experience.location}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{experience.description}</p>
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-muted-foreground">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
