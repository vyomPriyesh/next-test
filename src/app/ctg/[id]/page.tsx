import { Metadata } from 'next'

// Define the props for dynamic routes
type PageProps = {
  params: {
    id: string
  }
}

// Server-side metadata generation (SEO)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news_details/1/${params.id}`, {
    cache: 'no-store',
  });

  const json = await res.json();
  const title = json?.data?.title || 'Default Title';

  return {
    title,
    description: `Read more about: ${title}`,
  };
}

// Server-side rendered page
export default async function CtgPage({ params }: PageProps) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news_details/1/${params.id}`, {
    cache: 'no-store',
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
