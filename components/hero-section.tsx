"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-accent/5 animate-gradient-flow" />

      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-background/5 to-background/20" />

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-secondary/5 rounded-full animate-float-subtle blur-sm"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-secondary/15 to-accent/8 rounded-full animate-float-subtle blur-sm"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-accent/8 to-secondary/3 rounded-full animate-float-subtle blur-md"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-secondary/12 to-accent/6 rounded-full animate-float-subtle blur-sm"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-accent/6 to-secondary/4 rounded-full animate-float-subtle blur-sm"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 container-premium text-center">
        <div
          className={`transition-all duration-1200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="inline-flex items-center space-x-3 glass-card rounded-full px-6 py-3 mb-12 hover-lift animate-shimmer">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-sm font-medium text-accent tracking-wide">AI-Powered Medical Education</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-[0.9] tracking-tight">
            <span className="text-gradient-premium text-shadow-premium animate-text-reveal">Light + Progress</span>
            <br />
            <span className="text-foreground/90 animate-text-reveal" style={{ animationDelay: "0.2s" }}>
              in Medical Education
            </span>
          </h1>

          <p
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground/80 mb-12 max-w-4xl mx-auto text-pretty leading-relaxed font-light animate-text-reveal"
            style={{ animationDelay: "0.4s" }}
          >
            Revolutionizing access to medical knowledge with AI-powered tools designed for students, professionals, and
            communities worldwide.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-slide-up-elegant"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="group button-premium bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl animate-glow-premium"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-all duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group glass-card hover:glass-card border-accent/20 hover:border-accent/40 px-8 py-4 text-lg font-medium rounded-xl hover-lift bg-transparent"
            >
              <Zap className="w-5 h-5 mr-3 group-hover:animate-pulse text-accent" />
              <span className="text-foreground/80">Watch Demo</span>
            </Button>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up-elegant"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="glass-card p-6 rounded-2xl hover-lift text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient-premium mb-3">10K+</div>
              <div className="text-sm lg:text-base text-muted-foreground/70 font-medium tracking-wide">
                Medical Cases
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-lift text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient-premium mb-3">95%</div>
              <div className="text-sm lg:text-base text-muted-foreground/70 font-medium tracking-wide">
                Accuracy Rate
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl hover-lift text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient-premium mb-3">50+</div>
              <div className="text-sm lg:text-base text-muted-foreground/70 font-medium tracking-wide">Countries</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-accent/40 rounded-full flex justify-center backdrop-blur-sm bg-background/10">
          <div className="w-1.5 h-4 bg-gradient-to-b from-accent to-secondary rounded-full mt-3 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
