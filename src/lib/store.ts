// lib/store.ts
import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './slices/newsSlice'

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
