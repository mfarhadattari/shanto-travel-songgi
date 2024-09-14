// Need to use the React-specific entry point to import createApi
import config from '@/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.base_api }),
  endpoints: () => ({}),
});
