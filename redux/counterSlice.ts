import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1,
  time: 0, // ✅ Estado global para o tempo do cronômetro
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 1) {
        state.value -= 1;
      }
    },
    reset: (state) => {
      state.value = 1;
    },
    setTime: (state, action) => { 
      state.time = action.payload; // ✅ Atualiza o tempo globalmente
    }
  },
});

export const { increment, decrement, reset, setTime } = counterSlice.actions;
export default counterSlice.reducer;
