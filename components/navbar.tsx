"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300
        w-full max-w-6xl mx-auto px-5 py-4 sm:px-6 lg:px-8
        ${
          isScrolled
            ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg"
            : "bg-white/70 dark:bg-black/70 backdrop-blur-sm"
        }
        rounded-full border border-gray-200 dark:border-gray-800
      `}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
            <span className="text-white dark:text-black font-bold text-sm">SN</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {["hero", "about", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {id === "hero" ? "Home" : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <Button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
          >
            nunsian20024@gmail.com
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-center items-center gap-4 py-3">
            {["hero", "about", "projects", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 text-sm font-medium text-left"
              >
                {id === "hero" ? "Home" : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 w-full mt-2"
            >
              nunsian20024@gmail.com
            </Button>
        </div>
      )}
    </nav>
  )
}
