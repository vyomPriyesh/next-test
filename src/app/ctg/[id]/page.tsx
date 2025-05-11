'use client'

import { useParams } from 'next/navigation'

export default function CtgPage() {
  const { id } = useParams();

  if (!id) {
    return <p>Loading…</p>
  }



  return (
    <div>
      <h1>Category ID: {id}</h1>
    </div>
  )
}
