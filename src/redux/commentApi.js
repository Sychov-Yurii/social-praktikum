import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://65be0bb8dcfcce42a6f1c1d8.mockapi.io";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Comments"],
    }),
    addComment: builder.mutation({
      query: (data) => ({
        url: API_ENDPOINT,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const { useGetCommentsQuery, useAddCommentMutation } = commentApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
//   tagTypes: ['Posts'],
//   endpoints: (build) => ({
//     getPosts: build.query({
//       query: () => 'posts',
//       providesTags: (result) =>
//         result ? result.map(({ id }) => ({ type: 'Posts', id })) : [],
//     }),
//     addPost: build.mutation({
//       query: (body) => ({
//         url: `posts`,
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['Posts'],
//     }),
//   }),
// })
