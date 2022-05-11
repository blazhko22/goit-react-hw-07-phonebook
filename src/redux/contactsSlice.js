import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const contactApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://627513fd5dc4f5764b9e3c7e.mockapi.io' }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    createContact: builder.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const { 
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation, 
} = contactApi;