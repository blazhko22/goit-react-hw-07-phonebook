import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import filterReducer from './reducers';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterReducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

setupListeners(store.dispatch);