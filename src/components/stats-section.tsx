"use client"

import { useEffect, useState } from "react"

const stats = [
  { number: 50, suffix: "+", label: "Components", description: "Ready-to-use components" },
  { number: 25, suffix: "+", label: "Blocks", description: "Pre-built sections" },
  { number: 15, suffix: "k+", label: "Downloads", description: "Monthly downloads" },
  { number: 99, suffix: "%", label: "Satisfaction", description: "Developer satisfaction" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < value) {
          return prev + Math.ceil(value / 50)
        }
        return value
      })
    }, 50)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
            Trusted by developers{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">worldwide</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Join the growing community of developers building with NewUI
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-3 sm:mb-4">
                <AnimatedNumber value={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                {stat.label}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
