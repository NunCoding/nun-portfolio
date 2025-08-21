"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-muted relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-float" />
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-accent rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-10 w-16 h-16 bg-secondary rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main heading */}
          <div className={`space-y-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground font-serif">Sian Nun</h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>

          {/* Subtitle */}
          <div
            className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-primary font-serif">Frontend Developer</h2>
            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences through innovative design and modern web technologies. Passionate
              about creating user-centered solutions that blend creativity with functionality.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 pt-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" className="px-8 py-3 text-lg font-medium">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-medium bg-transparent">
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center gap-6 pt-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://github.com/NunCoding"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isVisible ? "animate-bounce" : "opacity-0"}`}
            style={{ animationDelay: "1s" }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
