import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/Users/UserSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
