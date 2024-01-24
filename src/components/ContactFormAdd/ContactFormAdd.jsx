import styles from './ContactFormAdd.module.css';

export const ContactFormAdd = () => {
  const handleChange = e => {};
  const handleSubmit = e => {
    e.preventDefault();
    const target = e.target;
    console.log('target:', target);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <input
            placeholder="Name"
            type="text"
            name="name"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <input
            placeholder="Phone number"
            type="tel"
            name="number"
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Add Contact</button>
      </form>
    </>
  );
};
