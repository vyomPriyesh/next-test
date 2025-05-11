// app/ctg/[id]/page.tsx

import { Metadata } from 'next'

// `generateMetadata` will automatically infer the `params` type correctly
export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news_details/1/${params.id}`, {
    cache: 'no-store',
  })

  const json = await res.json()
  const title = json?.data?.title || 'Default Title'

  return {
    title,
    description: `Read more about: ${title}`,
  }
}

export default async function CtgPage({
  params,
}: {
  params: { id: string }
}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news_details/1/${params.id}`, {
    cache: 'no-store',
  })

  const json = await res.json()
  const news = json.data

  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.content}</p>
    </div>
  )
}
