"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, GraduationCap, Award, BookOpen } from "lucide-react"

const educationItems = [
  {
    id: 1,
    type: "university",
    institution: "University of Nigeria, Nsukka",
    degree: "Bachelor's Degree",
    period: "2017 - 2022", // Update with your actual dates
    description: "Graduated with honors, focusing on web development and software engineering principles.",
    achievements: ["Dean's List", "Final Year Project Award"],
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
  },
]

const trainingPrograms = [
  {
    id: 1,
    program: "3MTT Software Development Program",
    institution: "3MTT",
    period: "2024",
    description: "Intensive training in JavaScript and Node.js development.",
    skills: ["JavaScript", "Node.js", "Express", "MongoDB"],
    icon: <BookOpen className="h-10 w-10 text-primary" />,
  },
  {
    id: 2,
    program: "Frontend Development",
    institution: "Utiva",
    period: "2022",
    description: "Comprehensive training in modern frontend technologies and best practices.",
    skills: ["React", "CSS", "Responsive Design", "Web Accessibility"],
    icon: <Award className="h-10 w-10 text-primary" />,
  },
  {
    id: 3,
    program: "Web Development Bootcamp",
    institution: "Techpem",
    period: "2023",
    description: "Hands-on training in full-stack web development.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    icon: <Award className="h-10 w-10 text-primary" />,
  },
  {
    id: 4,
    program: "Software Engineering",
    institution: "Dehel Technologies",
    period: "2024",
    description: "Training in software engineering principles and practices.",
    skills: ["Software Architecture", "Git", "Agile Methodology", "Testing"],
    icon: <Award className="h-10 w-10 text-primary" />,
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education & Training
        </motion.h2>

        <div className="space-y-12">
          {/* University Education */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Academic Education
            </motion.h3>
            <div className="grid grid-cols-1 gap-6">
              {educationItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <CardTitle>{item.institution}</CardTitle>
                        <p className="text-lg font-medium">
                          {item.degree} 
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <CalendarDays className="mr-1 h-4 w-4" />
                          {item.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{item.description}</p>
                      {item.achievements && item.achievements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">Achievements:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-muted-foreground">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Training */}
          <div>
            <motion.h3
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Professional Training
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                      <div className="mt-1">{program.icon}</div>
                      <div>
                        <CardTitle>{program.program}</CardTitle>
                        <p className="text-lg font-medium">{program.institution}</p>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <CalendarDays className="mr-1 h-4 w-4" />
                          {program.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{program.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {program.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
