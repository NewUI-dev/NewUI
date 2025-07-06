import { TemplatesGrid } from "@/components/templates-grid"
import { TemplatesHeader } from "@/components/templates-header"

export default function TemplatesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <TemplatesHeader />
      <TemplatesGrid />
    </div>
  )
}
