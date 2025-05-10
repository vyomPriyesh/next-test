// app/ctg/page.tsx
import MetaHydrator from '@/components/MetaHydrator';
import { useSelector } from 'react-redux';
import { AppState } from '@/lib/store';
import Head from 'next/head';

// Simulate fetching metadata (replace with real API call if needed)
async function getMetaFromServer() {
  // Replace with actual API call or fetching logic
  return {
    title: 'Category Title',
    description: 'Description for this category',
    image: 'https://example.com/images/category.jpg',
  };
}

export default async function Page() {
  const meta = await getMetaFromServer();

  return (
    <>
      <MetaHydrator meta={meta} /> {/* Hydrate Redux with metadata */}
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <div>
        <h1>{meta.title}</h1>
        <p>{meta.description}</p>
        <img src={meta.image} alt={meta.title} />
      </div>
    </>
  );
}
