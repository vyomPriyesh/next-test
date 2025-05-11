// app/ctg/[id]/page.tsx

import { Metadata } from 'next'

// Define the type for `params` correctly
type Params = Promise<{ id: string }> // `id` is a single string, not an array

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news_details/1/${id}`, {
    cache: 'no-store',
  });

  const json = await res.json();
  const title = json?.data?.title || 'Default Title';
  const image = `https://img.youtube.com/vi/${json?.data?.blog_image[0]?.details}/hqdefault.jpg`

  return {
    title,
    description: `Read more about: ${title}`,
    image: image
  };
}

export default async function CtgPage({ params }: { params: Params }) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news_details/1/${id}`, {
    cache: 'no-store',
  });

  const json = await res.json();
  const news = json.data;
  const image = `https://img.youtube.com/vi/${json?.data?.blog_image[0]?.details}/hqdefault.jpg`


  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.content}</p>
      <img src={image} alt="" />
    </div>
  );
}
