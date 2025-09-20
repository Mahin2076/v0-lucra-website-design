"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Play, RotateCcw, MessageCircle, Award } from "lucide-react"

export function DemoSection() {
  const [activeDemo, setActiveDemo] = useState<"database" | "quiz" | "simulation">("database")
  const [searchQuery, setSearchQuery] = useState("")
  const [isFlipped, setIsFlipped] = useState(false)

  const demoContent = {
    database: {
      title: "AI Medical Database",
      description: "Search symptoms and get intelligent medical insights",
      component: (
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Enter symptoms (e.g., chest pain, shortness of breath)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 animate-pulse-glow"
            />
          </div>
          {searchQuery && (
            <div className="space-y-3 animate-slide-up">
              <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-accent mb-2">Possible Conditions</h4>
                <div className="space-y-2">
                  <Badge variant="secondary">Angina Pectoris</Badge>
                  <Badge variant="secondary">Myocardial Infarction</Badge>
                  <Badge variant="secondary">Pulmonary Embolism</Badge>
                </div>
              </div>
              <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <h4 className="font-semibold text-secondary mb-2">Recommended Actions</h4>
                <ul className="text-sm space-y-1">
                  <li>• Immediate ECG assessment</li>
                  <li>• Cardiac enzyme testing</li>
                  <li>• Consider emergency consultation</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      ),
    },
    quiz: {
      title: "Interactive Quiz Generator",
      description: "AI-generated medical quizzes with instant feedback",
      component: (
        <div className="space-y-4">
          <Card className={`cursor-pointer transition-all duration-500 ${isFlipped ? "animate-card-flip" : ""}`}>
            <CardHeader>
              <CardTitle className="text-lg">Question 1 of 5</CardTitle>
            </CardHeader>
            <CardContent>
              {!isFlipped ? (
                <div>
                  <p className="mb-4">What is the most common cause of chest pain in young adults?</p>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                      onClick={() => setIsFlipped(true)}
                    >
                      A) Myocardial infarction
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                      onClick={() => setIsFlipped(true)}
                    >
                      B) Costochondritis
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                      onClick={() => setIsFlipped(true)}
                    >
                      C) Pulmonary embolism
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center animate-slide-up">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-600 mb-2">Correct!</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Costochondritis is indeed the most common cause of chest pain in young, healthy adults.
                  </p>
                  <Button onClick={() => setIsFlipped(false)} size="sm">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      ),
    },
    simulation: {
      title: "AI Patient Simulation",
      description: "Interactive virtual patients for clinical training",
      component: (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-muted to-accent/10 rounded-lg p-6 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-full mx-auto mb-4 flex items-center justify-center animate-float">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h4 className="font-semibold mb-2">Virtual Patient: Sarah, 28</h4>
            <p className="text-sm text-muted-foreground mb-4">
              "I've been experiencing severe headaches for the past week, especially in the morning."
            </p>
            <div className="flex gap-2 justify-center">
              <Button size="sm" variant="outline">
                <Play className="w-4 h-4 mr-2" />
                Ask Question
              </Button>
              <Button size="sm" variant="outline">
                Physical Exam
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-accent/10 rounded-lg">
              <div className="text-2xl font-bold text-accent">85%</div>
              <div className="text-xs text-muted-foreground">Empathy Score</div>
            </div>
            <div className="text-center p-3 bg-secondary/10 rounded-lg">
              <div className="text-2xl font-bold text-secondary">92%</div>
              <div className="text-xs text-muted-foreground">Diagnostic Accuracy</div>
            </div>
          </div>
        </div>
      ),
    },
  }

  return (
    <section id="demo" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Experience Lucra in Action</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore our interactive demos to see how AI transforms medical education.
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-card border border-border rounded-lg p-1">
            {Object.entries(demoContent).map(([key, content]) => (
              <Button
                key={key}
                variant={activeDemo === key ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveDemo(key as any)}
                className={activeDemo === key ? "animate-pulse-glow" : ""}
              >
                {content.title}
              </Button>
            ))}
          </div>
        </div>

        {/* Demo Content */}
        <div className="max-w-2xl mx-auto">
          <Card className="animate-slide-up">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{demoContent[activeDemo].title}</CardTitle>
              <p className="text-muted-foreground">{demoContent[activeDemo].description}</p>
            </CardHeader>
            <CardContent>{demoContent[activeDemo].component}</CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
