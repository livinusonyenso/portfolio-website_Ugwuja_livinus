"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "React-Native", level: 75},
      { name: "Nodejs", level: 50},
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Chrome DevTools", level: 85 },
      { name: "npm/yarn", level: 80 },
      { name: "Webpack", level: 70 },
      { name: "Jest", level: 75 },
      { name: "GitHub Actions", level: 65 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "NestJS", level: 65 },
      { name: "Express", level: 70 },
      { name: "RESTful APIs", level: 80 },
      { name: "Firebase", level: 75 },
      { name: "MongoDB", level: 65 },
      { name: "MySQL", level: 65 },
      { name: "GraphQL", level: 60 },
      { name: "Serverless", level: 65 },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Tools
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="Frontend" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                {skillCategories.map((category) => (
                  <TabsTrigger key={category.name} value={category.name}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {skillCategories.map((category) => (
              <TabsContent key={category.name} value={category.name} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-6">Skill Bars</h3>
                    <div className="space-y-6">
                      {category.skills.map((skill, index) => (
                        <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-6">Skill Radar</h3>
                    <Card>
                      <CardContent className="p-6">
                        <SkillRadar skills={category.skills} />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

function SkillBar({
  name,
  level,
  index,
}: {
  name: string
  level: number
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5">
        <motion.div
          className="bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        ></motion.div>
      </div>
    </motion.div>
  )
}

function SkillRadar({ skills }: { skills: { name: string; level: number }[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect()
      setSize({
        width,
        height: width, // Make it square
      })
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current || size.width === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set canvas dimensions
    canvas.width = size.width
    canvas.height = size.height

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = Math.min(centerX, centerY) * 0.9

    // Draw radar levels (circles)
    for (let i = 1; i <= 5; i++) {
      const radius = (maxRadius * i) / 5
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
      ctx.strokeStyle = "rgba(150, 150, 150, 0.2)"
      ctx.stroke()
    }

    // Draw radar axes
    const numSkills = skills.length
    const angleStep = (2 * Math.PI) / numSkills

    skills.forEach((_, i) => {
      const angle = i * angleStep
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + Math.cos(angle) * maxRadius, centerY + Math.sin(angle) * maxRadius)
      ctx.strokeStyle = "rgba(150, 150, 150, 0.3)"
      ctx.stroke()
    })

    // Draw skill points and labels
    ctx.beginPath()
    skills.forEach((skill, i) => {
      const angle = i * angleStep
      const radius = (maxRadius * skill.level) / 100
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }

      // Draw skill point
      ctx.fillStyle = "rgba(59, 130, 246, 0.8)"
      ctx.beginPath()
      ctx.arc(x, y, 5, 0, 2 * Math.PI)
      ctx.fill()

      // Draw skill label
      const labelX = centerX + Math.cos(angle) * (maxRadius + 20)
      const labelY = centerY + Math.sin(angle) * (maxRadius + 20)
      ctx.fillStyle = "currentColor"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(skill.name, labelX, labelY)
    })

    // Close and fill the skill area
    ctx.closePath()
    ctx.fillStyle = "rgba(59, 130, 246, 0.2)"
    ctx.fill()
    ctx.strokeStyle = "rgba(59, 130, 246, 0.8)"
    ctx.lineWidth = 2
    ctx.stroke()
  }, [skills, size])

  return (
    <div ref={containerRef} className="w-full aspect-square">
      <canvas ref={canvasRef} width={size.width} height={size.height} className="w-full h-full" />
    </div>
  )
}
