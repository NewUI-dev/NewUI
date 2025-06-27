import Hero from "@/views/web/home/Hero";
import Review from "@/views/web/home/Review";

export default function HomePage() {
	return (
		<main className="flex flex-1 flex-col justify-center text-center">
			<Hero />
			<Review />
		</main>
	);
}
