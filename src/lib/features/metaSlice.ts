// lib/features/metaSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MetaState {
  title: string;
  description: string;
  image: string;
}

const initialState: MetaState = {
  title: '',
  description: '',
  image: '',
};

const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    setMeta: (state, action: PayloadAction<MetaState>) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.image = action.payload.image;
    },
  },
});

export const { setMeta } = metaSlice.actions;
export default metaSlice.reducer;
