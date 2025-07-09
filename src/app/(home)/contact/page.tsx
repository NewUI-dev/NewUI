import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Github, Twitter } from "lucide-react";

export default function ContactPage() {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-4xl">
				{/* Header */}
				<div className="text-center mb-12 sm:mb-16">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
						Get in{" "}
						<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
							touch
						</span>
					</h1>
					<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
						{`Have questions about NewUI? Need help with
						implementation? We'd love to hear from you.`}
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
					{/* Contact Form */}
					<div className="lg:col-span-2">
						<Card>
							<CardHeader>
								<CardTitle className="text-xl sm:text-2xl">
									Send us a message
								</CardTitle>
								<CardDescription>
									{` Fill out the form below and we'll get back to you as soon as possible.`}
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="grid sm:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="firstName">
											First name
										</Label>
										<Input
											id="firstName"
											placeholder="John"
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="lastName">
											Last name
										</Label>
										<Input
											id="lastName"
											placeholder="Doe"
										/>
									</div>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										placeholder="john@example.com"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="subject">Subject</Label>
									<Input
										id="subject"
										placeholder="How can we help?"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="message">Message</Label>
									<textarea
										id="message"
										placeholder="Tell us more about your question or feedback..."
										className="min-h-[120px] resize-none"
									/>
								</div>
								<Button className="w-full sm:w-auto">
									<Mail className="mr-2 h-4 w-4" />
									Send Message
								</Button>
							</CardContent>
						</Card>
					</div>

					{/* Contact Info */}
					<div className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">
									Contact Information
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-start gap-3">
									<Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
									<div>
										<p className="font-medium">Email</p>
										<p className="text-sm text-muted-foreground">
											hello@newui.dev
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<MessageSquare className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
									<div>
										<p className="font-medium">Discord</p>
										<p className="text-sm text-muted-foreground">
											Join our community
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Github className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
									<div>
										<p className="font-medium">GitHub</p>
										<p className="text-sm text-muted-foreground">
											Open an issue
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<Twitter className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
									<div>
										<p className="font-medium">Twitter</p>
										<p className="text-sm text-muted-foreground">
											@newui_dev
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="text-lg">
									Frequently Asked
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<p className="font-medium text-sm mb-1">
										How do I install components?
									</p>
									<p className="text-xs text-muted-foreground">
										Use our CLI or copy-paste the code
										directly.
									</p>
								</div>
								<div>
									<p className="font-medium text-sm mb-1">
										Is NewUI free to use?
									</p>
									<p className="text-xs text-muted-foreground">
										{`Yes, it's completely free and open
										source.`}
									</p>
								</div>
								<div>
									<p className="font-medium text-sm mb-1">
										Can I customize the components?
									</p>
									<p className="text-xs text-muted-foreground">
										All components are fully customizable.
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
