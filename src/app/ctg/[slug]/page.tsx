import { getMetaFromServer } from '@/lib/getmeta';
import Ctg from '@/components/Ctg';
import { Metadata } from 'next';

// Type for dynamic route parameters
interface Params {
  slug: string;
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  return getMetaFromServer(params.slug);
}

// Page component
export default function Page({ params }: { params: Params }) {
  return <Ctg id={params.slug} />;
}