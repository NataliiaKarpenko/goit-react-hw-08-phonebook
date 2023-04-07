import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { FormInputStyled, LabelStyled } from './FormInput.styled';
import { selectContacts } from '../../redux/selectors';
import { addContact } from 'redux/operations';

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
      id: nanoid(),
    };

    const isExisting = contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExisting) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));

    setName('');
    setNumber('');
  };

  return (
    <FormInputStyled onSubmit={onSubmit}>
      <LabelStyled>
        Name
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
      <button type="submit">Add the contact</button>
    </FormInputStyled>
  );
};
