import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Conjugare } from './types';

export const dexonlineAPI = createApi({
  reducerPath: 'dexonline',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:${__SERVER_PORT__}/` }),
  endpoints: (builder) => ({
    getVerb: builder.query<Conjugare, string>({
      query: (verb) => `conjugare/${verb}`,
    }),
  }),
});

export const { useGetVerbQuery } = dexonlineAPI;
