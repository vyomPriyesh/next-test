// app/ctg/page.tsx
import MetaHydrator from '@/components/MetaHydrator';
import { getMetaFromServer } from '@/lib/getMeta';
import Head from 'next/head';

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
      <MetaHydrator meta={meta} /> {/* Hydrate Redux if needed */}
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
