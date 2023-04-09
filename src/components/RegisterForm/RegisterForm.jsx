import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextField } from '@mui/material';
import Button from '@mui/joy/Button';
import { toast } from 'react-toastify';

import { register } from '../../redux/operations';
import {
  StyledRegisterForm,
  StyledInputPassword,
  StyledVisibilityBtn,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (formData.password.length < 4) {
      return toast.info('Passwords must be at least 4 characters long!');
    }

    dispatch(register(formData));
    form.reset();
  };
  return (
    <StyledRegisterForm onSubmit={onSubmitHandler}>
      <TextField
        required
        variant="outlined"
        label="Username"
        type="text"
        name="name"
        className="Input"
      />
      <TextField
        required
        variant="outlined"
        label="Email"
        type="email"
        name="email"
        className="Input"
      />
      <div>
        <StyledInputPassword
          required
          variant="outlined"
          label="Password"
          name="password"
          minLength="4"
          className="Input PasswordInput"
          type={passwordType}
        />
        <StyledVisibilityBtn type="button" onClick={togglePassword}>
          {passwordType === 'password' ? (
            <VisibilityOff color="action" />
          ) : (
            <Visibility color="primary" />
          )}
        </StyledVisibilityBtn>
      </div>
      <Button type="submit" className="SubmitBtn">
        Register
      </Button>
    </StyledRegisterForm>
  );
};
