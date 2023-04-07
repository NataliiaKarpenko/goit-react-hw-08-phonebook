import { createSlice } from '@reduxjs/toolkit';

import { getContacts, addContact } from './operations';

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
        state.status = 'resolved';
        state.contacts = payload;
      })
      .addCase(getContacts.rejected, errorReducer)
      // ADDCONTACT
      .addCase(addContact.pending, pendingReducer)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.status = 'resolved';
        state.contacts = [...state.contacts, payload];
      })
      .addCase(addContact.rejected, errorReducer),
});

export const contactsReducer = contactsSlice.reducer;
