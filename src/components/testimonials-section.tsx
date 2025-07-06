"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    content:
      "NewUI has completely transformed how we build our applications. The components are beautifully designed and incredibly easy to customize.",
    author: "Sarah Johnson",
    role: "Frontend Developer",
    company: "TechCorp",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    content:
      "The documentation is excellent and the components work flawlessly. It's saved us countless hours of development time.",
    author: "Michael Chen",
    role: "Lead Developer",
    company: "StartupXYZ",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    content:
      "As a designer-developer, I love how NewUI bridges the gap between design and code. The components look great out of the box.",
    author: "Emily Rodriguez",
    role: "Design Engineer",
    company: "DesignStudio",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Loved by Developers</h2>
          <p className="mt-4 text-lg text-muted-foreground">See what developers are saying about NewUI</p>
        </div>

        <div className="mt-16 mx-auto max-w-4xl">
          <Card className="relative overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-xl sm:text-2xl font-medium leading-8 text-foreground mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonials[currentIndex].avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {testimonials[currentIndex].author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <div className="font-semibold">{testimonials[currentIndex].author}</div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
