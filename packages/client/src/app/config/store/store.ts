import { configureStore } from '@reduxjs/toolkit';
import { dexonlineAPI } from './api/dexonline';

export const store = configureStore({
  reducer: {
    [dexonlineAPI.reducerPath]: dexonlineAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dexonlineAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
