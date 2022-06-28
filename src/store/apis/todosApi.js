import  { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// baseQuery para establecer una configuracion base
// query: () => '/todos' concatena a lo establecido en baseUrl
export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        }),
        getTodo: builder.query({
            query: (todoId) => `/todos/${todoId}`
        }),
    })

})

// createApi crea principalmente hooks
// le pone query para saber q es un get, si fuera un post se pondria como sufijo una mutation
// pone el prefijo 'use' por el estandar de react para los hooks
export const { useGetTodosQuery } = todosApi;
