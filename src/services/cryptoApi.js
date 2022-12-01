import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoHeaders = {
  "X-RapidAPI-Key": "840ab51d35msh5a46c23fe31fe01p1a64aejsn6b243a732d78",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
    headers: cryptoHeaders,
  }),
  endpoints: (builder) => ({
    getCryptoCoins: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
  }),
});

export const { useGetCryptoCoinsQuery } = cryptoApi;
