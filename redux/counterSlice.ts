import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1, // usa ele para se tornar nosso valor padrão incremento
  time: 0, // tempo padrão
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { // objeto chamado "reducers" que contém funções para manipular estado
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
      state.time = action.payload; 
    }
  },
});

export const { increment, decrement, reset, setTime } = counterSlice.actions;
export default counterSlice.reducer;
