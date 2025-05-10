// lib/features/metaSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MetaState {
  [key: string]: { title: string; description: string; image: string };
}

const initialState: MetaState = {};

const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    setMeta: (state, action: PayloadAction<{ id: string; meta: { title: string; description: string; image: string } }>) => {
      const { id, meta } = action.payload;
      state[id] = meta; // Store metadata keyed by id
    },
  },
});

export const { setMeta } = metaSlice.actions;
export default metaSlice.reducer;
