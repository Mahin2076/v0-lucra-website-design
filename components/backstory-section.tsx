"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Globe, Heart, Lightbulb } from "lucide-react"

export function BackstorySection() {
  const timeline = [
    {
      icon: Lightbulb,
      title: "The Vision",
      description: "Making medical knowledge accessible to anyone, anywhere in the world.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Cpu,
      title: "Raspberry Pi Innovation",
      description: "Built on affordable, portable hardware designed for low-resource environments.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Bringing advanced AI-driven medical training to underserved communities.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Empowering Students",
      description: "Delivering light (knowledge) and progress to medical students globally.",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="backstory" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Why <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Lucra</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Born from the belief that quality medical education should be accessible to everyone, regardless of location
            or resources.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-secondary opacity-30" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="group hover:scale-105 transition-all duration-300 hover:animate-glow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-3 group-hover:animate-float`}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background animate-pulse-glow" />
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-accent/5 to-secondary/5 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground text-pretty">
                To democratize medical education by providing cutting-edge AI tools that work on affordable hardware,
                ensuring that geographical and economic barriers never prevent someone from accessing quality medical
                training and knowledge.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
