"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

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
  {
    content: "The copy-paste approach is genius. No more dealing with package installations and version conflicts.",
    author: "David Kim",
    role: "Full Stack Developer",
    company: "InnovateLab",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    content: "Best component library I've used. The blocks feature is a game-changer for rapid prototyping.",
    author: "Lisa Wang",
    role: "Product Designer",
    company: "CreativeFlow",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    content: "The accessibility features are top-notch. Finally, a component library that takes a11y seriously.",
    author: "Alex Thompson",
    role: "Senior Developer",
    company: "AccessFirst",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
]

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <Card className="w-80 sm:w-96 flex-shrink-0 mx-4 hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-sm sm:text-base leading-6 mb-6 text-muted-foreground">
          "{testimonial.content}"
        </blockquote>
        <div className="flex items-center">
          <Avatar className="h-10 w-10">
            <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
            <AvatarFallback>
              {testimonial.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <div className="font-semibold text-sm">{testimonial.author}</div>
            <div className="text-xs text-muted-foreground">
              {testimonial.role} at {testimonial.company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function TestimonialsMarquee() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              developers
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">See what developers are saying about NewUI</p>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        <div className="flex animate-marquee2 absolute top-0">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} />
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-muted/20 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-muted/20 to-transparent z-10" />
      </div>
    </section>
  )
}
