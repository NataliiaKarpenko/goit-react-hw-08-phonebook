import { RegisterForm } from '../components/RegisterForm/RegisterForm';

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

export default function Register() {
  return (
    <div style={styles.container}>
      <RegisterForm />
    </div>
  );
}
