import { LoginForm } from '../components/LoginForm/LoginForm';

const styles = {
  container: {
    paddingTop: 80,
    paddingBottom: 40,
    minHeight: 'calc(100vh - 250px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default function Login() {
  return (
    <div style={styles.container}>
      <LoginForm />
    </div>
  );
}
