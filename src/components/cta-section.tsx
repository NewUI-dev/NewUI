import { Button } from "@/components/ui/button"
import { ArrowRight, Github, BookOpen } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
            Ready to build something{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">amazing?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join thousands of developers who are already building incredible applications with NewUI. Get started in
            minutes, not hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6" asChild>
              <Link href="/components">
                Browse Components
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 py-6 bg-transparent" asChild>
              <Link href="/docs">
                <BookOpen className="mr-2 h-5 w-5" />
                Read Documentation
              </Link>
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto text-base px-8 py-6" asChild>
              <Link href="https://github.com/newui-dev/NewUI" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free and open source</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>MIT License</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
