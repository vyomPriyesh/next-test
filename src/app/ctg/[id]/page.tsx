// /app/ctg/[id]/page.tsx
import { getMetaFromServer } from '@/lib/getMeta';
import Ctg from '@/components/Ctg';
import { Metadata } from 'next';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return await getMetaFromServer(params.id);
}

export default function Page({ params }: PageProps) {
  return <Ctg id={params.id} />;
}
