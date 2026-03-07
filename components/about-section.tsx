"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Smartphone, Layers, TrendingUp } from "lucide-react"

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
            <h3 className="text-2xl font-bold mb-4 capitalize">
              I Build Frontend roducts that help startups ship fast, scale clean, and win users on every device.
            </h3>
            <p className="text-muted-foreground mb-6">
              Frontend developer specializing in React, Next.js, Tailwind CSS, and React Native, with 3+ years building
              production-grade web and mobile applications for real businesses. I don't just write code; I make
              architecture decisions, own the UI/UX, and take products from concept to deployment.
            </p>
            <p className="text-muted-foreground mb-6">
              Founders hire me when they need someone who moves fast without cutting corners. I've helped teams
              improve page load speeds, reduce bounce rates, and deliver polished mobile experiences across industries,
              from real estate and e-commerce to maritime logistics and hospitality.
            </p>
            <p className="text-muted-foreground">
              3MTT Software Development Program alumnus (JavaScript ecosystem). I think like a builder first,
              and every decision I make is tied to a business outcome, not just a clean diff.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Ship Fast, Ship Right",
                description: "I move at startup speed without sacrificing code quality or scalability. No spaghetti code, no tech debt landmines.",
              },
              {
                icon: <Smartphone className="h-10 w-10 text-primary" />,
                title: "Mobile-First, Always",
                description: "Built and shipped React Native apps to the Play Store. Mobile isn't an afterthought in my workflow, it's the baseline.",
              },
              {
                icon: <Layers className="h-10 w-10 text-primary" />,
                title: "Full Frontend Ownership",
                description: "Architecture, UI/UX decisions, performance tuning, and deployment, I handle it end-to-end. You don't need three people; you need one who can own it.",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-primary" />,
                title: "Outcome-Driven",
                description: "Every project I ship has a measurable result: faster load times, lower bounce rates, higher retention. Code that doesn't move numbers isn't finished.",
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
