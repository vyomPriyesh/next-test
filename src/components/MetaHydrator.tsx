// components/MetaHydrator.tsx
'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMeta } from '@/lib/features/metaSlice';
import { AppDispatch } from '@/lib/store';

interface MetaProps {
  meta: {
    title: string;
    description: string;
    image: string;
  };
}

export default function MetaHydrator({ meta }: MetaProps) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setMeta(meta)); // Store metadata in Redux
  }, [meta, dispatch]);

  return null; // No UI rendered here
}
