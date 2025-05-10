import { getMetaFromServer } from '@/lib/getMeta';
import Ctg from '@/components/Ctg';
import { Metadata } from 'next';

export async function generateMetadata(
  props: Promise<{ params: { slug: string } }>
): Promise<Metadata> {
  const { params } = await props;
  return await getMetaFromServer(params.slug);
}

export default function Page(
  { params }: { params: { slug: string } }
) {
  return <Ctg id={params.slug} />;
}
