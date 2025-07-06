import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Zap,
  Palette,
  Code,
  Shield,
  Smartphone,
  Globe,
  Copy,
  Blocks,
  Layout,
  Sparkles,
  Users,
  Heart,
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for performance with minimal bundle size and fast rendering.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description: "Built with Tailwind CSS. Customize colors, spacing, and more to match your brand.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Built by developers, for developers. TypeScript ready with excellent DX.",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Accessible",
    description: "Built with accessibility in mind. WCAG compliant components out of the box.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Copy,
    title: "Copy & Paste",
    description: "No package installations. Just copy the code and paste it into your project.",
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    icon: Blocks,
    title: "Pre-built Blocks",
    description: "Ready-to-use sections for common UI patterns like hero, pricing, testimonials.",
    gradient: "from-red-400 to-pink-500",
  },
  {
    icon: Layout,
    title: "Page Templates",
    description: "Complete page layouts for landing pages, dashboards, and documentation sites.",
    gradient: "from-teal-400 to-blue-500",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    description: "Beautiful, modern components that follow the latest design trends and best practices.",
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by the community, for the community. Open source and constantly improving.",
    gradient: "from-violet-400 to-purple-500",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Crafted with attention to detail and a passion for great user experiences.",
    gradient: "from-rose-400 to-red-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Responsive design that works perfectly on all devices and screen sizes.",
    gradient: "from-cyan-400 to-teal-500",
  },
  {
    icon: Globe,
    title: "Framework Agnostic",
    description: "Works with Next.js, Vite, Remix, and any React-based framework.",
    gradient: "from-emerald-400 to-green-500",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
            Everything you need to build{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              amazing apps
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our component library provides all the tools you need to create beautiful, accessible, and performant user
            interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20 hover:scale-105"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
