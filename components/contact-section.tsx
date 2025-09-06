"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Github, Linkedin,Facebook } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "nunsian2024@gmail.com",
    href: "mailto:nunsian2024@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "(+855) 87 509 939 / 319 997 497",
    href: "tel:+85587509939",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Phnom Penh, Cambodia",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/NunCoding",
    color: "hover:text-gray-900",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-blue-600",
  },
  {
    icon: Facebook,
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61580076381292",
    color: "hover:text-blue-400",
  },
]

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // You would typically send this data to your backend here
    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-serif mb-4">Get In Touch</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you. Let&apos;s create something amazing
              together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div>
                <h3 className="text-2xl font-semibold text-foreground font-serif mb-6">Let&apos;s Connect</h3>
                <p className="text-muted-foreground mb-8">
                  I&apos;m always open to discussing new opportunities, creative projects, or potential collaborations.
                  Whether you have a question about my work or want to start a conversation about your next project,
                  feel free to reach out.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={info.title}
                    className={`p-4 bg-card border-border hover:border-primary transition-colors ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <CardContent className="p-0">
                      <a
                        href={info.href}
                        className="flex items-center space-x-4 group"
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          <p className="text-muted-foreground group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-card border border-border rounded-lg hover:border-primary transition-colors ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <Card className="h-[460px] p-6 bg-card border-border">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-semibold text-foreground font-serif mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-input border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-input border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or idea..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-input border-border focus:border-primary resize-none"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div
            className={`text-center mt-16 pt-8 border-t border-border ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-muted-foreground">
              © 2025 Sian Nun. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
