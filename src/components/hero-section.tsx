import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-12 sm:py-20">
			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-4xl text-center">
					<div className="mb-8 flex justify-center">
						<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-primary/20 transition-colors">
							<span className="flex items-center gap-2">
								<Sparkles className="h-4 w-4" />
								Announcing NewUI v1.0
							</span>
						</div>
					</div>

					<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
						Build beautiful apps with{" "}
						<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
							modern components
						</span>
					</h1>

					<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
						A modern, customizable, developer-first UI component
						library built with React, Tailwind CSS, and Radix UI.
						Copy, paste, and customize to build production-grade
						applications.
					</p>

					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Button size="lg" asChild>
							<Link href="/components">
								Browse Components
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<Link
								href="https://github.com/newui-dev/NewUI"
								target="_blank"
							>
								<Github className="mr-2 h-4 w-4" />
								View on GitHub
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
