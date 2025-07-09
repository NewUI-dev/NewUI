import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Zap } from "lucide-react";
import Link from "next/link";

const blocks = [
	{
		title: "Pricing Section",
		description: "Beautiful pricing cards with features",
		preview: (
			<div className="space-y-4">
				<div className="text-center">
					<h3 className="text-lg font-semibold">Pro Plan</h3>
					<div className="text-2xl font-bold">$29/mo</div>
				</div>
				<div className="space-y-2 text-sm">
					<div className="flex items-center gap-2">
						<Star className="h-4 w-4" />
						<span>Unlimited projects</span>
					</div>
					<div className="flex items-center gap-2">
						<Users className="h-4 w-4" />
						<span>Team collaboration</span>
					</div>
				</div>
			</div>
		),
	},
	{
		title: "Feature Grid",
		description: "Showcase your product features",
		preview: (
			<div className="grid grid-cols-2 gap-4">
				<div className="text-center space-y-2">
					<Zap className="h-6 w-6 mx-auto" />
					<div className="text-sm font-medium">Fast</div>
				</div>
				<div className="text-center space-y-2">
					<Star className="h-6 w-6 mx-auto" />
					<div className="text-sm font-medium">Reliable</div>
				</div>
			</div>
		),
	},
	{
		title: "Testimonials",
		description: "Social proof from happy customers",
		preview: (
			<div className="space-y-3">
				<div className="flex gap-1">
					{[...Array(5)].map((_, i) => (
						<Star key={i} className="h-4 w-4 fill-current" />
					))}
				</div>
				<p className="text-sm">{`"Amazing product, highly recommend!"`}</p>
				<div className="text-xs text-muted-foreground">
					- Sarah Johnson
				</div>
			</div>
		),
	},
	{
		title: "CTA Section",
		description: "Convert visitors with compelling CTAs",
		preview: (
			<div className="text-center space-y-3">
				<h3 className="font-semibold">Ready to get started?</h3>
				<p className="text-sm text-muted-foreground">
					Join thousands of users
				</p>
				<Button size="sm">Get Started</Button>
			</div>
		),
	},
];

export function BlocksPreview() {
	return (
		<section className="py-20 sm:py-32 bg-muted/20">
			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Pre-built Blocks
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Copy-paste ready sections for common UI patterns
					</p>
				</div>

				<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{blocks.map((block, index) => (
						<Card
							key={index}
							className="group hover:shadow-lg transition-shadow"
						>
							<CardContent className="p-6">
								<div className="mb-4 h-32 rounded-lg bg-muted/50 p-4 flex items-center justify-center">
									{block.preview}
								</div>
								<h3 className="font-semibold mb-2">
									{block.title}
								</h3>
								<p className="text-sm text-muted-foreground mb-4">
									{block.description}
								</p>
								<Button
									variant="ghost"
									size="sm"
									className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
								>
									View Block
									<ArrowRight className="ml-2 h-3 w-3" />
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="mt-12 text-center">
					<Button asChild>
						<Link href="/blocks">
							View All Blocks
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
