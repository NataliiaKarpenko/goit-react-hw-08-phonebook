import { createSelector } from '@reduxjs/toolkit';

export const selectUserName = state => state.user.user.name;
export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectIsRefreshing = state => state.user.isRefreshing;
export const selectUserError = state => state.user.error;

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;
export const selectFilterValue = state => state.filter.value;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    return contacts
      .filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      )
      .sort((initialContact, nextContact) =>
        initialContact.name.localeCompare(nextContact.name)
      );
  }
);
