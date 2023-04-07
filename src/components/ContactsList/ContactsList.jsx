import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectError,
} from '../../redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <p>Loading contacts...</p>}
      {error && <b>{error}</b>}
      <h2>Contacts</h2>
      {!isLoading && visibleContacts.length !== 0 && (
        <ul>
          {visibleContacts.map(contact => {
            return (
              <li key={contact.id}>
                <ContactsItem
                  contactName={contact.name}
                  contactNumber={contact.number}
                  contactId={contact.id}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
