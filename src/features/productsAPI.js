import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6465e4429c09d77a62f6e60b.mockapi.io' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products'
        })
    })
})

export const { useGetAllProductsQuery } = productsApi