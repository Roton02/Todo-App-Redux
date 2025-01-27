import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/localhost://5000" }),
  endpoints: (builder) => ({
    getQuery: builder.query({
      query: () => "/task",
    }),
    CreateTask: builder.mutation({
      query: (taskdata) => ({
        url: "/task",
        method: "POST",
        body: taskdata,
      }),
    }),
  }),
});
export const { useGetQueryQuery, useCreateTaskMutation } = baseApi;
