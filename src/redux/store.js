import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactsSlice';
import filterReducer from './reducers';

const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

export default store;