import { ComponentPreview } from "./component-preview";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export interface ComponentPreviewProps {
	name: string;
	description: string;
	category: string;
	status: string;
	preview: React.ReactNode;
	code: string;
	usage: string;
}

const components = [
	{
		name: "Button",
		description:
			"Displays a button or a component that looks like a button.",
		category: "Form",
		status: "Stable",
		preview: <Button>Click me</Button>,
		code: `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Click me</Button>
}`,
		usage: `<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`,
	},
	{
		name: "Card",
		description: "Displays a card with header, content, and footer.",
		category: "Layout",
		status: "Stable",
		preview: (
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<CardDescription>
						Card description goes here.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Card content</p>
				</CardContent>
			</Card>
		),
		code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  )
}`,
		usage: `<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>`,
	},
	{
		name: "Badge",
		description: "Displays a badge or a component that looks like a badge.",
		category: "Display",
		status: "Stable",
		preview: <Badge>New</Badge>,
		code: `import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}`,
		usage: `<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`,
	},
	{
		name: "Input",
		description: "Displays a form input field.",
		category: "Form",
		status: "Stable",
		preview: <Input placeholder="Enter text..." className="max-w-sm" />,
		code: `import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input placeholder="Email" />
}`,
		usage: `<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled" />`,
	},
	{
		name: "Label",
		description: "Renders an accessible label associated with controls.",
		category: "Form",
		status: "Stable",
		preview: (
			<div className="space-y-2">
				<Label htmlFor="email">Email</Label>
				<Input id="email" placeholder="Enter your email" />
			</div>
		),
		code: `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}`,
		usage: `<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />`,
	},
	{
		name: "Avatar",
		description:
			"An image element with a fallback for representing the user.",
		category: "Display",
		status: "Stable",
		preview: (
			<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
				JD
			</div>
		),
		code: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`,
		usage: `<Avatar>
  <AvatarImage src="/avatar.jpg" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
	},
];

const categories = [
	"All",
	"Form",
	"Layout",
	"Display",
	"Feedback",
	"Navigation",
];

export function ComponentsGrid() {
	return (
		<div>
			<div className="flex flex-wrap gap-2 mb-8">
				{categories.map((category) => (
					<Button
						key={category}
						variant={category === "All" ? "default" : "outline"}
						size="sm"
					>
						{category}
					</Button>
				))}
			</div>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{components.map((component) => (
					<ComponentPreview
						key={component.name}
						name={component.name}
						description={component.description}
						category={component.category}
						status={component.status}
						preview={component.preview}
						code={component.code}
						usage={component.usage}
					/>
				))}
			</div>
		</div>
	);
}
