// components/MetaHydrator.tsx
'use client';

import { setMeta } from '@/lib/features/metaSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function MetaHydrator({ meta }: { meta: any }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMeta(meta));
  }, [dispatch, meta]);

  return null;
}
