import { createSlice } from '@reduxjs/toolkit';

import {
  getContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};
const errorReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      // GETCONTACTS
      .addCase(getContacts.pending, pendingReducer)
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getContacts.rejected, errorReducer)

      // ADDCONTACT
      .addCase(addContact.pending, pendingReducer)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.rejected, errorReducer)

      // DELETECONTACT
      .addCase(deleteContact.pending, pendingReducer)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(contact => contact.id !== payload.id);
      })
      .addCase(deleteContact.rejected, errorReducer)

      // EDITCONTACT
      .addCase(editContact.pending, pendingReducer)
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.items = state.items.map(item => {
          if (item.id === payload.id) {
            return payload;
          }
          return item;
        });
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editContact.rejected, errorReducer),
});

export const contactsReducer = contactsSlice.reducer;
