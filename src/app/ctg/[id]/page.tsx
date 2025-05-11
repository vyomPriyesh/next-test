'use client'

import axios from 'axios';
import { useParams } from 'next/navigation'
import { useEffect } from 'react';

export default function CtgPage() {
  const { id } = useParams();

  if (!id) {
    return <p>Loading…</p>
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;


  useEffect(() => {

    const getData = async () => {
      try {
        const response = await axios.get(`${apiUrl}news_details/1/${id}`);
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])


  return (
    <div>
      <h1>Category ID: {id}</h1>
    </div>
  )
}
