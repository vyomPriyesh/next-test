'use client'

import { setError, setLoading, setNewsData } from '@/lib/slices/newsSlice';
import { RootState } from '@/lib/store';
import axios from 'axios';
import Head from 'next/head';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function CtgPage() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const newsData = useSelector((state: RootState) => state.news.data)
  const title: string = newsData?.title || 'Default Title'
  

  useEffect(() => {
    if (!id) return;

    const getData = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(`${apiUrl}news_details/1/${id}`);
        dispatch(setNewsData(response.data.data));
      } catch (err) {
        if (err instanceof Error) {
          dispatch(setError(err.message))
        } else {
          dispatch(setError('An unexpected error occurred.'))
        }
      } finally {
        dispatch(setLoading(false));
      }
    };

    getData();
  }, [id]);

  if (!id) return <p>Loading…</p>;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <h1>{title}</h1>
        <h1>Category ID: {id}</h1>
      </div>
    </>
  );
}
