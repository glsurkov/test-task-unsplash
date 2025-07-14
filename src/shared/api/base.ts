import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: (headers) => {
        return headers;
    },
});

export const api = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({}),
});
