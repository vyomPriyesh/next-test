import { createSlice } from '@reduxjs/toolkit'

interface NewsData {
  id: number
  title: string
  content?: string
  // add any other fields returned by your API
}

interface NewsState {
  data: NewsData | null
  loading: boolean
  error: string | null
}

const initialState: NewsState = {
  data: null,
  loading: false,
  error: null,
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsData: (state, action) => {
      state.data = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setNewsData, setLoading, setError } = newsSlice.actions
export default newsSlice.reducer
