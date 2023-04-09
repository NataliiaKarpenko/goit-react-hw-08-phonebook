import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/joy/Button';
import { TextField } from '@mui/material';

import { logIn } from 'redux/operations';
import {
  StyledLoginForm,
  StyledInputPassword,
  StyledVisibilityBtn,
} from './LoginForm.styled';

export const LoginForm = () => {
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
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    console.log(formData);

    dispatch(logIn(formData));

    form.reset();
  };

  return (
    <StyledLoginForm onSubmit={onSubmitHandler}>
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
        Log in
      </Button>
    </StyledLoginForm>
  );
};
