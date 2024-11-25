import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const profilingSlice = createSlice({
  name: 'profiling',
  initialState: {
    profilings: [],
    profiling:{},
  },
  reducers: {
    setProfilings: (state, action) => {
      state.profilings = action.payload;
    },
    setProfiling: (state, action) => {
        state.profiling = action.payload;
      },
  },
});

export const { 
  setProfilings,
  setProfiling
 } = profilingSlice.actions

export default profilingSlice.reducer