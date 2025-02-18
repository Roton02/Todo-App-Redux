import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../featured/counter/counerSlice";
import taskReducer from "../featured/Todo/todoSlice";
import { baseApi } from "../API/BaseApi";
// ...

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    todo: taskReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
