import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '0ff9f01813mshe2042601af7f375p1902c2jsn5d77b7c7cbd3',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
          query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

export const {
  useGetCryptosQuery,
  //useGetCryptoDetailsQuery,
  //useGetExchangesQuery,
  //useGetCryptoHistoryQuery,
} = cryptoApi;


