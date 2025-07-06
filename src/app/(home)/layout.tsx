import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import Footer from "@/components/layouts/Footer";

export const metadata = {
	title: "NewUI",
	description:
		"A modern, customizable, developer-first UI component library for building production-grade web apps.",
	keywords: [
		"UI components",
		"React",
		"Next.js",
		"Tailwind CSS",
		"Component library",
	],
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<HomeLayout
			{...baseOptions}
			links={[
				{
					text: "Components",
					url: "/docs/components",
					secondary: false,
				},
				{
					text: "Blocks",
					url: "https://pro.hextaui.com/blocks",
					secondary: false,
				},
				{
					text: "Templates",
					url: "https://pro.hextaui.com/themes",
					secondary: false,
				},
				{
					text: "Showcase",
					url: "/showcase",
					secondary: false,
				},
			]}
		>
			{children}
			<Footer />
		</HomeLayout>
	);
}
