import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Github,
	Twitter,
	Linkedin,
	Heart,
	Users,
	Code,
	Zap,
} from "lucide-react";
import Link from "next/link";

const team = [
	{
		name: "Alex Johnson",
		role: "Founder & Lead Developer",
		bio: "Full-stack developer with 8+ years of experience building design systems and component libraries.",
		avatar: "/placeholder.svg?height=80&width=80",
		social: {
			github: "#",
			twitter: "#",
			linkedin: "#",
		},
	},
	{
		name: "Sarah Chen",
		role: "Design Lead",
		bio: "Product designer passionate about creating accessible and beautiful user interfaces.",
		avatar: "/placeholder.svg?height=80&width=80",
		social: {
			github: "#",
			twitter: "#",
			linkedin: "#",
		},
	},
	{
		name: "Michael Rodriguez",
		role: "Developer Advocate",
		bio: "Developer relations expert helping developers build amazing applications with NewUI.",
		avatar: "/placeholder.svg?height=80&width=80",
		social: {
			github: "#",
			twitter: "#",
			linkedin: "#",
		},
	},
];

const values = [
	{
		icon: Heart,
		title: "Developer First",
		description:
			"We build for developers, by developers. Every decision is made with the developer experience in mind.",
	},
	{
		icon: Users,
		title: "Community Driven",
		description:
			"Our community shapes the future of NewUI. We listen, learn, and build together.",
	},
	{
		icon: Code,
		title: "Open Source",
		description:
			"Transparency and collaboration are at our core. Everything we build is open source.",
	},
	{
		icon: Zap,
		title: "Performance First",
		description:
			"We obsess over performance. Every component is optimized for speed and efficiency.",
	},
];

export default function AboutPage() {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-4xl">
				{/* Header */}
				<div className="text-center mb-16 sm:mb-20">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
						About{" "}
						<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
							NewUI
						</span>
					</h1>
					<p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
						{`We're on a mission to make building beautiful,
						accessible user interfaces easier and faster for
						developers everywhere.`}
					</p>
				</div>

				{/* Story */}
				<div className="mb-16 sm:mb-20">
					<Card className="border-0 shadow-none bg-gradient-to-br from-muted/30 to-background">
						<CardContent className="p-8 sm:p-12">
							<h2 className="text-2xl sm:text-3xl font-bold mb-6">
								Our Story
							</h2>
							<div className="prose prose-gray dark:prose-invert max-w-none">
								<p className="text-muted-foreground leading-relaxed mb-4">
									{`NewUI was born out of frustration with the
									current state of component libraries. We
									were tired of dealing with complex
									installations, version conflicts, and
									components that didn't quite fit our needs.`}
								</p>
								<p className="text-muted-foreground leading-relaxed mb-4">
									{` We believed there had to be a better way. A way that put developers first, prioritized simplicity, and
                  made beautiful UI accessible to everyone. So we built NewUI - a component library that you can copy,
                  paste, and customize to your heart's content.`}
								</p>
								<p className="text-muted-foreground leading-relaxed">
									{` Today, NewUI is used by thousands of developers worldwide to build everything from simple landing
                  pages to complex web applications. We're just getting started.`}
								</p>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Values */}
				<div className="mb-16 sm:mb-20">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
							Our Values
						</h2>
						<p className="text-lg text-muted-foreground">
							The principles that guide everything we do
						</p>
					</div>

					<div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
						{values.map((value, index) => {
							const Icon = value.icon;
							return (
								<Card
									key={index}
									className="group hover:shadow-lg transition-shadow"
								>
									<CardHeader>
										<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
											<Icon className="h-6 w-6 text-primary" />
										</div>
										<CardTitle className="text-xl">
											{value.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription className="text-base leading-relaxed">
											{value.description}
										</CardDescription>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>

				{/* Team */}
				<div className="mb-16 sm:mb-20">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
							Meet the Team
						</h2>
						<p className="text-lg text-muted-foreground">
							The people behind NewUI
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{team.map((member, index) => (
							<Card
								key={index}
								className="text-center group hover:shadow-lg transition-shadow"
							>
								<CardContent className="p-6">
									<div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
										<span className="text-2xl font-bold text-primary">
											{member.name
												.split(" ")
												.map((n) => n[0])
												.join("")}
										</span>
									</div>
									<h3 className="font-semibold text-lg mb-1">
										{member.name}
									</h3>
									<Badge variant="secondary" className="mb-3">
										{member.role}
									</Badge>
									<p className="text-sm text-muted-foreground mb-4 leading-relaxed">
										{member.bio}
									</p>
									<div className="flex justify-center gap-2">
										<Button
											variant="ghost"
											size="icon"
											asChild
										>
											<Link href={member.social.github}>
												<Github className="h-4 w-4" />
											</Link>
										</Button>
										<Button
											variant="ghost"
											size="icon"
											asChild
										>
											<Link href={member.social.twitter}>
												<Twitter className="h-4 w-4" />
											</Link>
										</Button>
										<Button
											variant="ghost"
											size="icon"
											asChild
										>
											<Link href={member.social.linkedin}>
												<Linkedin className="h-4 w-4" />
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* CTA */}
				<div className="text-center">
					<Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10">
						<CardContent className="p-8 sm:p-12">
							<h2 className="text-2xl sm:text-3xl font-bold mb-4">
								Join Our Community
							</h2>
							<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
								Be part of the growing community of developers
								building amazing applications with NewUI.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button size="lg" asChild>
									<Link href="https://github.com/newui-dev/NewUI">
										<Github className="mr-2 h-5 w-5" />
										Star on GitHub
									</Link>
								</Button>
								<Button variant="outline" size="lg" asChild>
									<Link href="/contact">Get in Touch</Link>
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
