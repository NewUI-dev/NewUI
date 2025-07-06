import { BlocksGrid } from "@/components/blocks-grid"
import { BlocksHeader } from "@/components/blocks-header"

export default function BlocksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BlocksHeader />
      <BlocksGrid />
    </div>
  )
}
