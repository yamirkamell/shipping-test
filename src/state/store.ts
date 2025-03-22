import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../pages/login/state/authState';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});