// /components/Ctg.tsx
'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setMeta } from '@/lib/features/metaSlice';
import { useDispatch } from 'react-redux';

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

const Ctg = ({ id }: CtgProps) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<NewsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL!;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}news_details/1/${id}`);
        if (response.data.status) {
          setData(response.data.data);
          dispatch(setMeta({
            title: response.data.data.title,
            description: '',
            image: '',
          }));
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
