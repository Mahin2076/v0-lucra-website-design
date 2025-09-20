"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, Brain, BookOpen, Search, Users, Zap } from "lucide-react"

export function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      icon: Database,
      title: "AI Medical Database",
      description:
        "Search by symptoms and get AI-generated possible conditions, linked medicines, and suggested next steps.",
      details: [
        "Intelligent symptom analysis",
        "Comprehensive drug database",
        "Evidence-based recommendations",
        "Real-time updates",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "Quiz Generator",
      description: "Automatically generates medical practice quizzes with interactive scoring and progress tracking.",
      details: [
        "Adaptive difficulty levels",
        "Instant feedback system",
        "Performance analytics",
        "Spaced repetition learning",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Patient Simulation",
      description: "AI-powered virtual patients with video and voice for realistic clinical training experiences.",
      details: [
        "Realistic patient interactions",
        "Voice recognition technology",
        "Empathy scoring system",
        "Clinical decision support",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Core Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Revolutionizing Medical Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Three powerful AI-driven tools designed to make medical knowledge accessible, interactive, and effective for
            learners worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                hoveredCard === index ? "animate-glow" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} p-4 group-hover:animate-float`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Explore Feature
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Demo Preview */}
        <div className="mt-16 text-center">
          <Button size="lg" className="animate-pulse-glow">
            <BookOpen className="w-5 h-5 mr-2" />
            Try Interactive Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
