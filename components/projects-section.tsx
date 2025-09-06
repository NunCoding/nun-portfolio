"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Skill and Assessment ability program",
    description:
      "An advanced platform designed to evaluate and track user skills through interactive assessments. It provides administrators with powerful tools to manage assessments, monitor performance, and analyze results in real time, ensuring accurate measurement of abilities and progress.",
    image: "/assessment.png",
    technologies: ["Nuxt.js", "JavaScript", "Tailwind CSS","Laravel Api", "Chart.js"],
    category: "Web Application",
    liveUrl: "https://assessment-knowledge.vercel.app/",
    githubUrl: "https://github.com/NunCoding/assessment-knowledge",
    featured: true,
  },
  {
    id: 2,
    title: "AgriConnect",
    description:
      "A digital agriculture marketplace that connects farmers directly with consumers. It helps farmers sell at fair prices while giving consumers access to fresh, local produce with secure and transparent transactions.",
    image: "/agriconnect.png",
    technologies: ["Nextjs", "Typescript", "shadcn"],
    category: "Website",
    liveUrl: "#",
    githubUrl: "https://github.com/NunCoding/agri_connect",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/ecommerce_Project.jpg",
    technologies: ["Vue.js", "TypeScript", "OpenWeather API", "Mapbox", "SCSS"],
    category: "Mobile App",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing creative work with smooth animations and modern design principles.",
    image: "/ecommerce_Project.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "MDX", "Vercel"],
    category: "Website",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description:
      "A comprehensive analytics platform for social media managers with detailed insights and automated reporting.",
    image: "/ecommerce_Project.jpg",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    category: "Analytics Platform",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "An educational platform with course management, progress tracking, and interactive learning modules.",
    image: "/ecommerce_Project.jpg",
    technologies: ["React", "Redux", "Node.js", "Express", "MySQL"],
    category: "Education Platform",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

const categories = [
  "All",
  "Web Application",
  "SaaS Platform",
  "Mobile App",
  "Website",
  "Analytics Platform",
  "Education Platform",
]

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div>
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-serif mb-4">Featured Projects</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise in modern web technologies and creative
              problem-solving.
            </p>
          </div>

          {/* Category Filter */}
          <div
            className={`flex flex-wrap justify-center gap-2 mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group overflow-hidden bg-card border-border transition-all duration-300 hover:shadow-lg ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                } ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Featured</Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Badge variant="outline" className="mb-2 text-xs">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground font-serif group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div
            className={`text-center mt-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.8s" }}
          >
            <Button size="lg" variant="outline" className="px-8 bg-transparent">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
