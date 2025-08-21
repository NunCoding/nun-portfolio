"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Users, Coffee, Heart } from "lucide-react"

const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Language" },
  { name: "Next.js", level: 88, category: "Framework" },
  { name: "Tailwind CSS", level: 92, category: "Styling" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "GraphQL", level: 80, category: "API" },
  { name: "Figma", level: 87, category: "Design" },
  { name: "Git", level: 93, category: "Tools" },
]

const interests = [
  { icon: Code, title: "Clean Code", description: "Writing maintainable and scalable code" },
  { icon: Palette, title: "UI/UX Design", description: "Creating beautiful user experiences" },
  { icon: Zap, title: "Performance", description: "Optimizing for speed and efficiency" },
  { icon: Users, title: "Collaboration", description: "Working effectively in teams" },
  { icon: Coffee, title: "Learning", description: "Staying updated with latest tech" },
  { icon: Heart, title: "Open Source", description: "Contributing to the community" },
]

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [skillsVisible, setSkillsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setSkillsVisible(true), 500)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-serif mb-4">About Me</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Passionate frontend developer with 5+ years of experience creating modern, responsive web applications
              that deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Content */}
            <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <Card className="p-6 bg-card border-border">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold text-foreground font-serif mb-4">My Journey</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Started my journey in web development during college, where I discovered my passion for creating
                      digital experiences that make a difference. What began as curiosity about how websites work has
                      evolved into a career focused on building modern, accessible applications.
                    </p>
                    <p>
                      I specialize in React ecosystem and modern JavaScript, with a strong eye for design and user
                      experience. I believe in writing clean, maintainable code and staying current with the latest
                      industry trends and best practices.
                    </p>
                    <p>
                      When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source
                      projects, or sharing knowledge with the developer community through blog posts and mentoring.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Interests Grid */}
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <Card
                    key={interest.title}
                    className={`p-4 bg-card border-border hover:border-primary transition-colors ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <CardContent className="p-0">
                      <interest.icon className="w-8 h-8 text-primary mb-2" />
                      <h4 className="font-semibold text-foreground mb-1">{interest.title}</h4>
                      <p className="text-sm text-muted-foreground">{interest.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className={`space-y-6 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <Card className="p-6 bg-card border-border">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold text-foreground font-serif mb-6">Technical Skills</h3>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {skill.category}
                          </Badge>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className={`bg-primary h-2 rounded-full transition-all duration-1000 ease-out ${
                              skillsVisible ? "" : "w-0"
                            }`}
                            style={{
                              width: skillsVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${index * 100}ms`,
                            }}
                          />
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-card border-border text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary font-serif">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card className="p-6 bg-card border-border text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary font-serif">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="p-6 bg-card border-border text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary font-serif">15+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </CardContent>
                </Card>
                <Card className="p-6 bg-card border-border text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary font-serif">24/7</div>
                    <div className="text-sm text-muted-foreground">Learning Mode</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
