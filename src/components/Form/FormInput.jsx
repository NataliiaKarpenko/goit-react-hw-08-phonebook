import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/joy/Button';
import { toast } from 'react-toastify';

import { FormInputStyled, LabelStyled } from './FormInput.styled';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

export const FormInput = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onEnteringInfo = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;

      case 'number':
        setNumber(event.target.value);
        break;

      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const contact = {
      name,
      number,
    };

    const isExisting = contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExisting) {
      toast.warn(`${contact.name} is already in contacts`, {
        toastId: '',
      });
      return;
    }

    dispatch(addContact(contact));

    setName('');
    setNumber('');
  };

  return (
    <FormInputStyled onSubmit={onSubmit}>
      <LabelStyled>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter a name"
          required
          autoComplete="off"
          value={name}
          onChange={onEnteringInfo}
        />
      </LabelStyled>
      <LabelStyled>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter a telephone number"
          autoComplete="off"
          required
          value={number}
          onChange={onEnteringInfo}
        />
      </LabelStyled>
      <Button type="submit" className="FormInputBtn">
        Add the contact
      </Button>
    </FormInputStyled>
  );
};
