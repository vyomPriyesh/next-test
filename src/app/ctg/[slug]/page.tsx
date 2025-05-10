import Ctg from "@/components/Ctg";

export default function Page({ params }: { params: { slug: string } }) {
  return <Ctg id={params.slug} />;
}