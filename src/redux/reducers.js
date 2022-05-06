import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, changeFilter } from './actions';

const items = createReducer([], {
  [addContact.type]: (state, { payload }) => [...state, payload],
  [removeContact.type]: (state, { payload }) => state.filter(el => el.name !== payload),
});

const filter = createReducer('', {
  [changeFilter.type]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
