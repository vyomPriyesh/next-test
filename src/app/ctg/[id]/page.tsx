// app/ctg/page.tsx
import { useSelector } from 'react-redux';
import { AppState } from '@/lib/store';
import MetaHydrator from '@/components/MetaHydrator';
import Head from 'next/head';
import { Metadata } from 'next';

// Simulating an API call or logic to set metadata in Redux
async function getMetaFromServer() {
  // This is an example of fetching metadata (can be from an API or static data)
  return {
    title: 'Category Title',
    description: 'Description for this category',
    image: 'https://img.youtube.com/vi/sgfe95B8V6w/hqdefault.jpg',
  };
}

export async function generateMetadata() {
  const meta = await getMetaFromServer();

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      images: [meta.image],
    },
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
