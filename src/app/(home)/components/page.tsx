import { ComponentsGrid } from "@/components/components-grid"
import { ComponentsHeader } from "@/components/components-header"

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ComponentsHeader />
      <ComponentsGrid />
    </div>
  )
}
