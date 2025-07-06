import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Check } from "lucide-react"
import { BlockPreview } from "./block-preview"

const blocks = [
  {
    name: "Hero Section",
    description: "A compelling hero section with headline, description, and CTA buttons.",
    category: "Marketing",
    complexity: "Simple",
    preview: (
      <div className="text-center space-y-2">
        <h3 className="font-bold text-sm">Build Amazing Apps</h3>
        <p className="text-xs text-muted-foreground">Get started today</p>
        <Button size="sm">Get Started</Button>
      </div>
    ),
    fullExample: (
      <div className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Build Amazing Apps</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create beautiful, responsive applications with our modern component library. Get started in minutes, not
            hours.
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    ),
    code: `export function HeroSection() {
  return (
    <section className="text-center space-y-6 py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Build Amazing Apps
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Create beautiful, responsive applications with our modern component library. 
          Get started in minutes, not hours.
        </p>
      </div>
      <div className="flex gap-4 justify-center">
        <Button size="lg">Get Started</Button>
        <Button variant="outline" size="lg">Learn More</Button>
      </div>
    </section>
  )
}`,
  },
  {
    name: "Pricing Cards",
    description: "Beautiful pricing cards with features and call-to-action buttons.",
    category: "E-commerce",
    complexity: "Medium",
    preview: (
      <div className="space-y-2 text-center">
        <div className="text-lg font-bold">$29</div>
        <div className="text-xs">per month</div>
        <div className="flex items-center gap-1 text-xs">
          <CreditCard className="h-3 w-3" />
          <span>Pro features</span>
        </div>
      </div>
    ),
    fullExample: (
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { name: "Starter", price: "$9", features: ["5 Projects", "10GB Storage", "Email Support"] },
          {
            name: "Pro",
            price: "$29",
            features: ["Unlimited Projects", "100GB Storage", "Priority Support", "Advanced Analytics"],
            popular: true,
          },
          {
            name: "Enterprise",
            price: "$99",
            features: ["Everything in Pro", "Custom Integrations", "Dedicated Support", "SLA"],
          },
        ].map((plan, i) => (
          <div key={i} className={`border rounded-lg p-6 ${plan.popular ? "border-primary shadow-lg" : ""}`}>
            {plan.popular && <Badge className="mb-4">Most Popular</Badge>}
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="text-3xl font-bold">
                {plan.price}
                <span className="text-sm font-normal">/mo</span>
              </div>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </div>
          </div>
        ))}
      </div>
    ),
    code: `import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from 'lucide-react'

export function PricingCards() {
  const plans = [
    { name: "Starter", price: "$9", features: ["5 Projects", "10GB Storage", "Email Support"] },
    { name: "Pro", price: "$29", features: ["Unlimited Projects", "100GB Storage", "Priority Support"], popular: true },
    { name: "Enterprise", price: "$99", features: ["Everything in Pro", "Custom Integrations", "SLA"] }
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {plans.map((plan, i) => (
        <div key={i} className={\`border rounded-lg p-6 \${plan.popular ? 'border-primary shadow-lg' : ''}\`}>
          {plan.popular && <Badge className="mb-4">Most Popular</Badge>}
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <div className="text-3xl font-bold">{plan.price}<span className="text-sm font-normal">/mo</span></div>
            <ul className="space-y-2 text-sm">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
              Get Started
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}`,
  },
  // Add more blocks with full examples...
]

const categories = ["All", "Marketing", "E-commerce", "Social Proof", "About"]
const complexities = ["All", "Simple", "Medium", "Complex"]

export function BlocksGrid() {
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
          <span className="text-sm font-medium">Complexity:</span>
          {complexities.map((complexity) => (
            <Button key={complexity} variant={complexity === "All" ? "default" : "outline"} size="sm">
              {complexity}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map((block) => (
          <BlockPreview
            key={block.name}
            name={block.name}
            description={block.description}
            category={block.category}
            complexity={block.complexity}
            preview={block.preview}
            code={block.code}
            fullExample={block.fullExample}
          />
        ))}
      </div>
    </div>
  )
}
