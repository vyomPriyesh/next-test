'use client'

import { setError, setLoading, setNewsData } from '@/lib/slices/newsSlice';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function CtgPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!id) return;

    const getData = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(`${apiUrl}news_details/1/${id}`);
        dispatch(setNewsData(response.data));
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    getData();
  }, [id]);

  if (!id) return <p>Loading…</p>;

  return (
    <div>
      <h1>Category ID: {id}</h1>
    </div>
  );
}
