// components/DynamicHead.tsx
'use client';

import { useSelector } from 'react-redux';
import { AppState } from '@/lib/store';
import Head from 'next/head';

export default function DynamicHead({ id }: { id: string }) {
  const meta = useSelector((state: AppState) => state.meta[id]);

  if (!meta) {
    return null; // Wait until metadata is loaded
  }

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
    </Head>
  );
}
