import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { getContacts } from 'redux/operations';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import {
  selectContacts,
  selectVisibleContacts,
  selectIsLoading,
  selectContactsError,
} from '../../redux/selectors';
import { StyledContactsContainer } from './ContactsList.styled';
import { Filter } from 'components/Filter/Filter';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <StyledContactsContainer>
      {!isLoading &&
        error &&
        toast.error(`${error}`, {
          toastId: '',
        })}
      <h1>Contacts</h1>
      <Filter />
      {contacts.length !== 0 &&
        visibleContacts.length === 0 &&
        toast.info('There are no contacts matching your query.', {
          toastId: '',
        })}
      {contacts.length === 0 && <p>⚠️There are no contacts added here yet.</p>}
      {visibleContacts.length !== 0 && (
        <ul style={{ width: '100%' }}>
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
    </StyledContactsContainer>
  );
};
