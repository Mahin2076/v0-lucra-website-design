"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap, Database, Brain, Users } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Features", href: "#features", icon: Zap },
    { name: "Database", href: "#database", icon: Database },
    { name: "AI Simulation", href: "#simulation", icon: Brain },
    { name: "About", href: "#backstory", icon: Users },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-lg animate-pulse-glow flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lucra
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-muted-foreground hover:text-accent transition-colors group"
              >
                <item.icon className="w-4 h-4 group-hover:animate-pulse" />
                <span>{item.name}</span>
              </a>
            ))}
            <Button className="animate-pulse-glow">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border border-border rounded-lg mt-2 p-4 animate-slide-up">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 py-2 text-muted-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
            <Button className="w-full mt-4 animate-pulse-glow">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
