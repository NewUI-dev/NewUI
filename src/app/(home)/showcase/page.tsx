import { ShowcaseGrid } from "@/components/showcase-grid"
import { ShowcaseHeader } from "@/components/showcase-header"

export default function ShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ShowcaseHeader />
      <ShowcaseGrid />
    </div>
  )
}
