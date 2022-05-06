import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('items/Add', (name, number) => {
  return {
    payload: {
      name,
      number,
      id: nanoid(),
    },
  };
});

export const removeContact = createAction('items/Remove');

export const changeFilter = createAction('filter/Change');
