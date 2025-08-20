"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [isLoading] = useState(true)
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Directly navigate to dashboard after 4s
      router.push('/web');
    }, 4000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <>
      {isLoading && <LoadingScreen />}
    </>
  )
}
