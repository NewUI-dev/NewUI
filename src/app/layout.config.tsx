import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
	nav: {
		title: (
			<>
				<Image
					src="/images/newui-black-logo.svg"
					alt="logo"
					width={32}
					height={32}
				/>
				NewUI
			</>
		),
	},
	// see https://fumadocs.dev/docs/ui/navigation/links
	githubUrl: "https://github.com/newui-dev/NewUI",
};
