import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { ContactsItemStyled } from './ContactsItem.styled';
import { deleteContact } from '../../redux/operations';

export const ContactsItem = ({ contactName, contactNumber, contactId }) => {
  const dispatch = useDispatch();

  return (
    <ContactsItemStyled>
      <div>
        <span className="name">{contactName}</span>:{' '}
        <span>{contactNumber}</span>
      </div>
      <button type="button" onClick={() => dispatch(deleteContact(contactId))}>
        Delete contact
      </button>
    </ContactsItemStyled>
  );
};

ContactsItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};
