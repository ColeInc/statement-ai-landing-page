"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  words: string[]
  className?: string
}

export default function AnimatedText({ words, className = "" }: AnimatedTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsAnimating(false)
      }, 500) // Half of the animation duration
    }, 3000) // Change word every 3 seconds

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <span
      className={`inline-block transition-all duration-500 ${
        isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      } ${className}`}
    >
      {words[currentWordIndex]}
    </span>
  )
}
