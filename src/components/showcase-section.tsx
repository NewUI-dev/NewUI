import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "SaaS Dashboard",
    description: "A complete dashboard built with NewUI components",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Dashboard", "SaaS", "Analytics"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-commerce Store",
    description: "Modern online store with shopping cart and checkout",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["E-commerce", "Shopping", "Payments"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "Clean portfolio site for developers and designers",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Portfolio", "Personal", "Showcase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Blog Platform",
    description: "Content management system with rich text editor",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Blog", "CMS", "Content"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ShowcaseSection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Built with NewUI</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what developers are building with our component library
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
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
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-3 w-3" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/showcase">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
