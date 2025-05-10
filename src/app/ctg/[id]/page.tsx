// app/ctg/[id]/page.tsx
import MetaHydrator from '@/components/MetaHydrator';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const meta = await getMetaFromServer(params.id); // Fetch metadata based on params.id
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      images: [meta.image],
    },
  };
}

async function getMetaFromServer(id: string) {
  // Replace with real API call
  return {
    title: `Category ${id} Title`,
    description: `Description for Category ${id}`,
    image: `https://example.com/images/${id}.jpg`,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const meta = await getMetaFromServer(params.id);

  return (
    <>
      <MetaHydrator meta={meta} /> {/* Hydrate Redux with metadata */}
      <div>
        <h1>{meta.title}</h1>
        <p>{meta.description}</p>
        <img src={meta.image} alt={meta.title} />
      </div>
    </>
  );
}
