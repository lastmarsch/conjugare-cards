import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Conjugare } from './types';

const baseUrl = `${__HOST__}:${__SERVER_PORT__}`;

export const dexonlineAPI = createApi({
  reducerPath: 'dexonline',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getVerb: builder.query<Conjugare, string>({
      query: (verb) => `conjugare/${verb}`,
    }),
  }),
});

export const { useGetVerbQuery } = dexonlineAPI;
