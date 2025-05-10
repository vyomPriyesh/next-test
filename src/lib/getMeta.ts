// /lib/getMeta.ts
import axios from 'axios';

export async function getMetaFromServer(id: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL!;
  try {
    const response = await axios.get(`${apiUrl}news_details/1/${id}`);
    const data = response.data.data;

    return {
      title: data.title,
      description: data.content?.slice(0, 150), // Example: first 150 characters
      image: data.blog_image?.[0]?.details
        ? `https://img.youtube.com/vi/${data.blog_image[0].details}/default.jpg`
        : '/default-image.jpg',
    };
  } catch (error) {
    console.error('Metadata fetch error:', error);
    return {
      title: 'News Not Found',
      description: '',
      image: '/default-image.jpg',
    };
  }
}
