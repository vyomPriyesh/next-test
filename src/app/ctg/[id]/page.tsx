// src/app/ctg/[id]/page.tsx
import { getMetaFromServer } from '@/lib/getMeta';
import Ctg from '@/components/Ctg';
import { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  return await getMetaFromServer(params.id);
}

export default function Page(
  { params }: { params: { id: string } }
) {
  return <Ctg id={params.id} />;
}
