'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface BlogImage {
  details: string;
}

interface NewsData {
  title: string;
  content: string;
  imageUrl?: string;
  blog_image: BlogImage[];
}

interface CtgProps {
  id: string;
}

const Ctg: React.FC<CtgProps> = ({ id }) => {
  const [data, setData] = useState<NewsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL!;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}news_details/1/80`);
        if (response.data.status) {
          setData(response.data.data);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, [id]);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  const youtubeThumbnail = data.blog_image?.[0]?.details
    ? `https://img.youtube.com/vi/${data.blog_image[0].details}/default.jpg`
    : '/default-image.jpg';

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <img src={youtubeThumbnail} alt={data.title} />
    </div>
  );
};

export default Ctg;
