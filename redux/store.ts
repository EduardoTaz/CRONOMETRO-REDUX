import { configureStore } from '@reduxjs/toolkit';
import cronometroReducer from './cronometroSlice';

const store = configureStore({
  reducer: {
    cronometro: cronometroReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
