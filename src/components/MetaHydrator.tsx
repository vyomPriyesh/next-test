// components/MetaHydrator.tsx
'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMeta } from '@/lib/features/metaSlice';
import { AppDispatch } from '@/lib/store';

interface MetaProps {
  id: string;
  meta: {
    title: string;
    description: string;
    image: string;
  };
}

export default function MetaHydrator({ id, meta }: MetaProps) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setMeta({ id, meta }));
  }, [id, meta, dispatch]);

  return null; // No UI rendered
}
