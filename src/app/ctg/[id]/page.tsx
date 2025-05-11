// app/ctg/[id]/page.tsx
import { Metadata } from 'next'

type Params = { id: string[] };  // id is an array of strings

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = params;
  const firstId = id[0];  // Access the first value in the array if id is an array
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news_details/1/${firstId}`, {
    cache: 'no-store',
  })

  const json = await res.json()
  const title = json?.data?.title || 'Default Title'

  return {
    title,
    description: `Read more about: ${title}`,
  }
}


export default async function CtgPage({ params }: { params: Params }) {
  const { id } = params;
  const firstId = id[0];

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news_details/1/${firstId}`, {
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
