import Ctg from "@/components/Ctg";
import { getMetaFromServer } from "@/lib/getMeta";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Generate metadata function
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Optional: You can use the parent metadata if needed
  // const previousImages = (await parent).openGraph?.images || [];
  
  return await getMetaFromServer(params.slug);
}

// Page component
export default function Page({ params }: Props) {
  return <Ctg id={params.slug} />;
}