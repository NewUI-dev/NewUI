import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import Footer from "@/components/layouts/Footer";

export const metadata = {
	title: "NewUI",
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<HomeLayout {...baseOptions}>
			{children}
			<Footer />
		</HomeLayout>
	);
}
