import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tempo: 0,
  taRodando: false,
};

const cronometroSlice = createSlice({
  name: 'cronometro',
  initialState,
  reducers: {
    start: (state) => {
      state.taRodando = true;
    },
    stop: (state) => {
      state.taRodando = false;
    },
    reset: (state) => {
      state.tempo = 0;
      state.taRodando = false;
    },
    tick: (state) => {
      state.tempo += 1;
    },
  },
});

export const { start, stop, reset, tick } = cronometroSlice.actions;
export default cronometroSlice.reducer;
