"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold])

  const getDirectionClass = () => {
    switch (direction) {
      case "up":
        return "translate-y-10"
      case "down":
        return "-translate-y-10"
      case "left":
        return "translate-x-10"
      case "right":
        return "-translate-x-10"
      default:
        return ""
    }
  }

  return (
    <div
      ref={ref}
      className={cn("reveal opacity-0 transition-all duration-700 ease-out", getDirectionClass(), className)}
    >
      {children}
    </div>
  )
}
