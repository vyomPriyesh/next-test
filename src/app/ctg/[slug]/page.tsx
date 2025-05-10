import { getMetaFromServer } from '@/lib/getMeta';
import Ctg from '@/components/Ctg';
import { Metadata } from 'next';

// Define the expected params type
interface PageParams {
  slug: string;
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  return await getMetaFromServer(params.slug);
}

// Page component
export default function Page({
  params,
}: {
  params: PageParams;
}) {
  return <Ctg id={params.slug} />;
}