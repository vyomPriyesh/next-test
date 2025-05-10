// src/app/ctg/[slug]/page.tsx
import { getMetaFromServer } from '@/lib/getMeta';
import { Metadata } from 'next';
import Ctg from '@/components/Ctg';

interface Params {
  slug: string;
}

// ✅ Correctly await the props object for generateMetadata
export async function generateMetadata(
  props: Promise<{ params: Params }>
): Promise<Metadata> {
  const { params } = await props;
  return await getMetaFromServer(params.slug);
}

// ✅ Get the `params` directly (not searchParams)
export default function Page({ params }: { params: Params }) {
  return <Ctg id={params.slug} />;
}
 