import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
	Product: [
		{ name: "Components", href: "/components" },
		{ name: "Blocks", href: "/blocks" },
		{ name: "Templates", href: "/templates" },
		{ name: "Showcase", href: "/showcase" },
	],
	Resources: [
		{ name: "Documentation", href: "/docs" },
		{ name: "GitHub", href: "https://github.com/newui-dev/NewUI" },
		{ name: "Changelog", href: "/changelog" },
		{ name: "Contributing", href: "/contributing" },
	],
	Community: [
		{ name: "Discord", href: "#" },
		{ name: "Twitter", href: "#" },
		{ name: "LinkedIn", href: "#" },
		{ name: "Blog", href: "/blog" },
	],
};

function Footer() {
	return (
		<footer className="border-t bg-background">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
					<div className="col-span-2">
						<Link href="/" className="flex items-center space-x-2">
							<div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
								<span className="text-primary-foreground font-bold text-sm">
									N
								</span>
							</div>
							<span className="font-bold text-xl">NewUI</span>
						</Link>
						<p className="mt-4 text-sm text-muted-foreground max-w-xs">
							A modern, customizable, developer-first UI component
							library for building production-grade web
							applications.
						</p>
						<div className="mt-6 flex space-x-4">
							<Link
								href="https://github.com/newui-dev/NewUI"
								className="text-muted-foreground hover:text-foreground"
								target="_blank"
							>
								<Github className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-foreground"
								target="_blank"
							>
								<Twitter className="h-5 w-5" />
								<span className="sr-only">Twitter</span>
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-foreground"
								target="_blank"
							>
								<Linkedin className="h-5 w-5" />
								<span className="sr-only">LinkedIn</span>
							</Link>
						</div>
					</div>

					{Object.entries(footerLinks).map(([category, links]) => (
						<div key={category}>
							<h3 className="font-semibold text-sm mb-4">
								{category}
							</h3>
							<ul className="space-y-3">
								{links.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-sm text-muted-foreground hover:text-foreground transition-colors"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-12 pt-8 border-t">
					<div className="flex flex-col sm:flex-row justify-between items-center">
						<p className="text-sm text-muted-foreground">
							© 2024 NewUI. All rights reserved.
						</p>
						<p className="text-sm text-muted-foreground mt-2 sm:mt-0">
							Built with ❤️ using Next.js and Tailwind CSS
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
