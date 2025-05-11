// app/ctg/[id]/page.tsx

import { Metadata } from 'next'

// Define the type for `params` correctly
type Params = Promise<{ id: string }> // `id` is a single string, not an array

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
   const { id } = await params // Directly access `id`
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news_details/1/${id}`, {
    cache: 'no-store', // Ensure no caching during build
  });

  const json = await res.json();
  const title = json?.data?.title || 'Default Title';

  return {
    title,
    description: `Read more about: ${title}`,
  };
}

export default async function CtgPage({ params }: { params: Params }) {
  const { id } = await params;  // Directly access `id`

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news_details/1/${id}`, {
    cache: 'no-store', // Ensure no caching during build
  });

  const json = await res.json();
  const news = json.data;

  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.content}</p>
    </div>
  );
}
