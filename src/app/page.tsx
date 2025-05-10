// src/app/ctg/page.tsx
import { getMetaFromServer } from '@/lib/getMeta';
import Ctg from '@/components/Ctg';
import { Metadata } from 'next';

// ✅ Accept props as a Promise and extract searchParams
export async function generateMetadata(
  props: Promise<{ searchParams: { slug: string } }>
): Promise<Metadata> {
  const { searchParams } = await props;

  return getMetaFromServer(searchParams?.slug);
}

export default function Page({
  searchParams,
}: {
  searchParams: { slug: string };
}) {
  return <Ctg id={searchParams.slug} />;
}
