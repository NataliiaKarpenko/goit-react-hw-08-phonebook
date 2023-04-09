import { ContactsList } from 'components/ContactsList/ContactsList';
import { FormInput } from 'components/Form/FormInput';

const styles = {
  container: {
    paddingTop: 80,
    minHeight: 'calc(100vh - 250px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

const ContactsPage = () => {
  return (
    <div style={styles.container}>
      <FormInput />

      <ContactsList />
    </div>
  );
};

export default ContactsPage;
