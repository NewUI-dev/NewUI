import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Heart } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "TaskFlow - Project Management",
    description:
      "A comprehensive project management tool with kanban boards, time tracking, and team collaboration features.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["SaaS", "Productivity", "Team Tools"],
    author: "Sarah Johnson",
    authorAvatar: "/placeholder.svg?height=32&width=32",
    liveUrl: "#",
    githubUrl: "#",
    likes: 124,
  },
  {
    title: "EcoShop - Sustainable E-commerce",
    description: "An eco-friendly online marketplace focusing on sustainable products with carbon footprint tracking.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["E-commerce", "Sustainability", "Marketplace"],
    author: "Michael Chen",
    authorAvatar: "/placeholder.svg?height=32&width=32",
    liveUrl: "#",
    githubUrl: "#",
    likes: 89,
  },
  {
    title: "DevPortfolio - Developer Showcase",
    description:
      "A modern portfolio template for developers with project galleries, blog integration, and contact forms.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Portfolio", "Personal", "Blog"],
    author: "Emily Rodriguez",
    authorAvatar: "/placeholder.svg?height=32&width=32",
    liveUrl: "#",
    githubUrl: "#",
    likes: 156,
  },
  {
    title: "HealthTracker - Wellness App",
    description: "Personal health and wellness tracking application with habit formation and progress visualization.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Health", "Tracking", "Personal"],
    author: "David Kim",
    authorAvatar: "/placeholder.svg?height=32&width=32",
    liveUrl: "#",
    githubUrl: "#",
    likes: 73,
  },
  {
    title: "LearnHub - Online Learning",
    description: "Educational platform with course management, progress tracking, and interactive learning materials.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Education", "Learning", "Platform"],
    author: "Lisa Wang",
    authorAvatar: "/placeholder.svg?height=32&width=32",
    liveUrl: "#",
    githubUrl: "#",
    likes: 201,
  },
  {
    title: "CryptoTracker - Investment Dashboard",
    description: "Cryptocurrency portfolio tracker with real-time prices, charts, and investment analytics.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Finance", "Crypto", "Dashboard"],
    author: "Alex Thompson",
    authorAvatar: "/placeholder.svg?height=32&width=32",
    liveUrl: "#",
    githubUrl: "#",
    likes: 167,
  },
]

const tags = ["All", "SaaS", "E-commerce", "Portfolio", "Dashboard", "Education", "Finance"]

export function ShowcaseGrid() {
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <Button key={tag} variant={tag === "All" ? "default" : "outline"} size="sm">
            {tag}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden relative">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 text-xs">
                <Heart className="h-3 w-3" />
                {project.likes}
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <img
                    src={project.authorAvatar || "/placeholder.svg"}
                    alt={project.author}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-muted-foreground">{project.author}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Live Demo
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline">Load More Projects</Button>
      </div>
    </div>
  )
}
