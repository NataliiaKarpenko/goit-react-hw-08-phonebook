import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmitHandler = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={onSubmitHandler} autoComplete="off">
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
          required
        />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
};
