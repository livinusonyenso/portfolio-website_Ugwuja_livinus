"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Emmanuel Ugbotor",
    role: "Senior Developer",
    company: "TechPem",
    avatar: "/emmanuel_Ugbotor.jpg?height=100&width=100",
    content:
      "An exceptional frontend developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are impressive.",
  },
  {
    id: 2,
    name: "Akodi Peterson",
    role: "Chief Product Officer ",
    company: "SpaceBox.",
    avatar: "/AkodiPeterson.jpg?height=100&width=100",
    content:
      "A talented developer with a great eye for design. He quickly grasp complex requirements and implement them efficiently.",
  },
  {
    id: 3,
    name: "Ekene Andrew",
    role: "Frontend Designer",
    company: "DesignHub",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Working with him was a pleasure. HE understand the importance of user experience and implement designs with precision.",
  },
  
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <Card className="border-none shadow-none bg-transparent">
                      <CardContent className="pt-6">
                        <div className="flex justify-center mb-6">
                          <div className="relative">
                            <Avatar className="h-20 w-20">
                              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1">
                              <Quote className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        </div>
                        <blockquote className="text-center mb-6">
                          <p className="text-lg italic">"{testimonial.content}"</p>
                        </blockquote>
                        <div className="text-center">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                  onClick={() => {
                    setActiveIndex(index)
                    setAutoplay(false)
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
