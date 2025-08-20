"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsVisible(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-card to-muted">
      <div className="text-center space-y-8">
        {/* Loading Icon */}
        <div className="relative">
          <div className="w-20 h-20 mx-auto">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-rotate-grow"></div>
            {/* Inner pulsing circle */}
            <div className="absolute inset-2 bg-accent rounded-full animate-pulse-glow"></div>
            {/* Center dot */}
            <div className="absolute inset-6 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-primary font-sans">Welcome to Sian Nun Portfolio</h1>
          <p className="text-lg text-muted-foreground font-serif">Crafting Creative Excellence...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto space-y-2 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground font-serif">{Math.round(progress)}% loaded</p>
        </div>
      </div>
    </div>
  )
}
