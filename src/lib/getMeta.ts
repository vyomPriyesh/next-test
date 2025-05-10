import axios from "axios";

export async function getMetaFromServer(slug: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL!;
  const response = await axios.get(`${apiUrl}news_details/1/${slug}`);
  const data = response.data.data;

  return {
    title: data?.title,
    description: data?.content?.slice(0, 150),
    image: data?.blog_image?.[0]?.details
      ? `https://img.youtube.com/vi/${data.blog_image[0].details}/default.jpg`
      : '/default-image.jpg',
  };
}
