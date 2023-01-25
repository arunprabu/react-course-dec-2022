import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  // root reducer -- combining all reducers
  reducer: {
    counter: counterReducer,
    // selector: reducer name
    users: usersReducer,
  },
});
