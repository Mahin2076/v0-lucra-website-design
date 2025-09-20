"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download, Github, Mail } from "lucide-react"

export function CallToActionSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-accent/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Ready to Transform Medical Education?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            Join thousands of medical students and professionals who are already using Lucra to enhance their learning
            experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="group animate-glow">
              <Download className="w-5 h-5 mr-2" />
              <span>Download Lucra</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group bg-transparent">
              <Github className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              <span>View on GitHub</span>
            </Button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="max-w-2xl mx-auto mb-16 animate-pulse-glow">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get the latest updates on new features, medical content, and platform improvements.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input placeholder="Enter your email address" className="pl-10" />
              </div>
              <Button className="animate-pulse-glow">Subscribe</Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-muted-foreground">
          <p className="mb-4">Built with ❤️ for the global medical community</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Contact Us
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
