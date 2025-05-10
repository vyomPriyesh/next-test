import { getMetaFromServer } from '@/lib/getMeta';
import Ctg from '@/components/Ctg';
import { Metadata } from 'next';
import { NextPage } from 'next';

// Define your specific params type
interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
}

// Generate metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return await getMetaFromServer(params.slug);
}

// Page component with proper typing
const Page: NextPage<PageProps> = ({ params }) => {
  return <Ctg id={params.slug} />;
};

export default Page;