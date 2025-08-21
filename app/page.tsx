"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/loading-screen";
import Navbar from "@/components/navbar";
import HomeSection from "@/components/home-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <>
          <Navbar />
          <main className="min-h-screen">
            <HomeSection />
            <AboutSection />
            <ProjectsSection />
          </main>
        </>
      )}
    </>
  );
}
