import { getMetaFromServer } from '@/lib/getMeta';
import Ctg from '@/components/Ctg';
import { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  return await getMetaFromServer(params.slug);
}

export default function Page(
  { params }: { params: { slug: string } }
) {
  return <Ctg id={params.slug} />;
}