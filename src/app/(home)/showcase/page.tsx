import { ShowcaseGrid } from "@/components/showcase-grid";
import { ShowcaseHeader } from "@/components/showcase-header";

export default function ShowcasePage() {
	return (
		<div className="max-w-7xl mx-auto py-8">
			<ShowcaseHeader />
			<ShowcaseGrid />
		</div>
	);
}
