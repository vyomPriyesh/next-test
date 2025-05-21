// app/cms/[id]/page.tsx
import { useParams } from 'next/navigation'

export default function CmsDynamicPage() {
  const { id } = useParams()  // grab dynamic param

  return (
    <div>
      <h1>CMS Dynamic Page for ID: {id}</h1>
      {/* Show content based on the id */}
    </div>
  )
}
