import { HeroSection } from "@/components/hero-section";
import { LiveDemosSection } from "@/components/live-demos-section";
import { FeaturesSection } from "@/components/features-section";
import { StatsSection } from "@/components/stats-section";
import { BlocksPreview } from "@/components/blocks-preview";
import { ShowcaseSection } from "@/components/showcase-section";
import { TestimonialsMarquee } from "@/components/testimonials-marquee";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
	return (
		<main className="flex flex-1 flex-col justify-center text-center">
			<HeroSection />
			<LiveDemosSection />
			<FeaturesSection />
			<StatsSection />
			<BlocksPreview />
			<ShowcaseSection />
			<TestimonialsMarquee />
			<CTASection />
		</main>
	);
}
