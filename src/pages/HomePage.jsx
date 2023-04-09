const styles = {
  container: {
    paddingTop: 80,
    minHeight: 'calc(100vh - 250px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: 70,
    fontWeight: 700,
    fontSize: 48,
    color: '#4f5aa8',
  },
  description: {
    marginBottom: 70,
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 30,

    color: '#4f5aa8',
  },
  instruction: {
    fontWeight: 600,
    fontSize: 25,
    color: '#272e6e',
  },
};

export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Phonebook App</h1>
      <p style={styles.description}>
        can completely and efficiently organize your contacts and eliminate any
        duplicate entries. It also comes with the filter to find the contacts
        you are looking for.
      </p>
      <p style={styles.instruction}>
        Please, <b>log in</b> or <b>register</b> to start working with the
        Phonebook App{' '}
        <span role="img" aria-label="Pointer finger icon">
          👆{' '}
        </span>
      </p>
    </div>
  );
}
