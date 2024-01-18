import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': 'cd035146e7msh228b022baf53853p14ed59jsndc3200250daf',
    'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
}
const baseUrl = 'https://real-time-news-data.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory}) => createRequest(`/search?query=${newsCategory}&country=RU&lang=ru`)
        })
    })
});

export const {
    useGetCryptoNewsQuery
  } = cryptoNewsApi;

/*
'X-RapidAPI-Key': 'cd035146e7msh228b022baf53853p14ed59jsndc3200250daf',
'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
const baseUrl = 'https://real-time-news-data.p.rapidapi.com'
query: ({newsCategory}) => createRequest(`/search?query=${newsCategory}&country=RU&lang=ru`)

'X-RapidAPI-Key': 'cd035146e7msh228b022baf53853p14ed59jsndc3200250daf',
'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com'
const baseUrl = 'https://google-news-api1.p.rapidapi.com'
query: ({newsCategory}) => createRequest(`/search?language=RU&q=${newsCategory}&limit=10`)
*/