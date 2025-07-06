import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Download } from "lucide-react"

const templates = [
  {
    name: "SaaS Landing Page",
    description: "Complete landing page for SaaS products with hero, features, pricing, and testimonials.",
    category: "Marketing",
    type: "Landing Page",
    image: "/placeholder.svg?height=200&width=300",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Dashboard Template",
    description: "Modern dashboard with sidebar navigation, charts, and data tables.",
    category: "Application",
    type: "Dashboard",
    image: "/placeholder.svg?height=200&width=300",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    name: "E-commerce Store",
    description: "Complete online store with product catalog, cart, and checkout flow.",
    category: "E-commerce",
    type: "Multi-page",
    image: "/placeholder.svg?height=200&width=300",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Portfolio Website",
    description: "Clean portfolio site for developers and designers with project showcase.",
    category: "Portfolio",
    type: "Multi-page",
    image: "/placeholder.svg?height=200&width=300",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Blog Template",
    description: "Modern blog layout with article listings, categories, and reading experience.",
    category: "Content",
    type: "Blog",
    image: "/placeholder.svg?height=200&width=300",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Documentation Site",
    description: "Clean documentation template with search, navigation, and content organization.",
    category: "Documentation",
    type: "Multi-page",
    image: "/placeholder.svg?height=200&width=300",
    demoUrl: "#",
    githubUrl: "#",
  },
]

const categories = ["All", "Marketing", "Application", "E-commerce", "Portfolio", "Content", "Documentation"]
const types = ["All", "Landing Page", "Dashboard", "Multi-page", "Blog"]

export function TemplatesGrid() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium">Category:</span>
          {categories.map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
              {category}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium">Type:</span>
          {types.map((type) => (
            <Button key={type} variant={type === "All" ? "default" : "outline"} size="sm">
              {type}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.name} className="group hover:shadow-lg transition-shadow overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src={template.image || "/placeholder.svg"}
                alt={template.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{template.name}</CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {template.type}
                </Badge>
              </div>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="text-xs">
                  {template.category}
                </Badge>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </Button>
                <Button size="sm" variant="ghost">
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </Button>
                <Button size="sm" variant="ghost">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
