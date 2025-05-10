import Ctg from '@/components/Ctg';
import { getMetaFromServer } from '@/lib/getMeta';
import { Metadata } from 'next';
import { type PageProps } from 'next/app';

// Type for dynamic route parameters
interface Params {
  slug: string;
}

interface Props extends PageProps {
  params: Params;
}

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return getMetaFromServer(params.slug);
}

// Page component
export default function Page({ params }: Props) {
  return <Ctg id={params.slug} />;
}