import { useDispatch } from 'react-redux';
import { register } from '../../redux/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch;

  const onSubmitHandler = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(register(formData));
    form.reset();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label>
        Username
        <input
          type="text"
          name="name"
          placeholder="Enter your username"
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          minLength="7"
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
