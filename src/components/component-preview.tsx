"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Check, Eye, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ComponentPreviewProps {
	name: string;
	description: string;
	category: string;
	status: string;
	preview: React.ReactNode;
	code: string;
	usage: string;
	children?: React.ReactNode;
	className?: string;
}

export function ComponentPreview({
	children,
	code,
	className,
}: ComponentPreviewProps) {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="relative my-6">
			<Tabs defaultValue="preview" className="relative mr-auto w-full">
				<div className="flex items-center justify-between pb-3">
					<TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
						<TabsTrigger
							value="preview"
							className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
						>
							<Eye className="mr-2 h-4 w-4" />
							Preview
						</TabsTrigger>
						<TabsTrigger
							value="code"
							className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
						>
							<Code2 className="mr-2 h-4 w-4" />
							Code
						</TabsTrigger>
					</TabsList>
				</div>
				<TabsContent
					value="preview"
					className="relative rounded-md border"
				>
					<div
						className={cn(
							"flex min-h-[350px] w-full justify-center p-10",
							className
						)}
					>
						<div className="flex items-center justify-center w-full">
							{children}
						</div>
					</div>
				</TabsContent>
				<TabsContent value="code">
					<div className="flex flex-col space-y-4">
						<div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
							<div className="relative">
								<pre className="bg-muted p-4 rounded-lg overflow-x-auto">
									<code className="text-sm">{code}</code>
								</pre>
								<Button
									size="sm"
									variant="outline"
									className="absolute right-4 top-4 bg-background"
									onClick={copyToClipboard}
								>
									{copied ? (
										<Check className="h-3 w-3" />
									) : (
										<Copy className="h-3 w-3" />
									)}
									<span className="sr-only">Copy</span>
								</Button>
							</div>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
