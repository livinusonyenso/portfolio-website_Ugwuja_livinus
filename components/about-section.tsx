"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users } from "lucide-react"

export default function AboutSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1 * index },
    }),
  }

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Frontend Developer with a passion for creating exceptional user experiences
            </h3>
            <p className="text-muted-foreground mb-6">
              I am a passionate frontend developer with 3+ years of hands-on experience building responsive, scalable,
              and accessible web applications. I specialize in JavaScript, React,React-Native, Next.js, TypeScript, Tailwind CSS, Node.js, NestJS, MySQL,
              and core web technologies.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in web development started with a curiosity about how websites work, which quickly evolved into
              a passion for creating beautiful, functional interfaces that solve real problems.
            </p>
            <p className="text-muted-foreground">
            I recently participated in the 3MTT Software Development Program, where I specialized in the JavaScript ecosystem. I'm passionate about building impactful solutions and constantly seeking new challenges and opportunities to grow as a developer.            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Code className="h-10 w-10 text-primary" />,
                title: "Clean Code",
                description: "I write clean, maintainable code with a focus on performance and best practices.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "User-Focused",
                description: "I create accessible interfaces that provide exceptional user experiences.",
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-primary" />,
                title: "Problem Solver",
                description: "I enjoy tackling complex problems and finding elegant solutions.",
              },
              {
                icon: (
                  <svg
                    className="h-10 w-10 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2v1" />
                    <path d="M12 21v1" />
                    <path d="M4.93 4.93l.7.7" />
                    <path d="M18.36 18.36l.7.7" />
                    <path d="M2 12h1" />
                    <path d="M21 12h1" />
                    <path d="M4.93 19.07l.7-.7" />
                    <path d="M18.36 5.64l.7-.7" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                ),
                title: "Continuous Learner",
                description: "I'm constantly learning new technologies and improving my skills.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4">{item.icon}</div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
