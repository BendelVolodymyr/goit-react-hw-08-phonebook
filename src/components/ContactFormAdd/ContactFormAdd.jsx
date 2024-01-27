import { useDispatch } from 'react-redux';
import styles from './ContactFormAdd.module.css';
import { addContact } from '../../redux/contacts/operations';
import { VscAdd } from 'react-icons/vsc';

export const ContactFormAdd = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value.trim();
    const number = e.currentTarget.elements.number.value.trim();
    const validForm = name === '' || number === '';

    if (!validForm) {
      dispatch(
        addContact({
          name: name,
          number: number,
        })
      );
      e.currentTarget.reset();
    } else {
      alert('Друже поле не може бути пустим');
    }
  };

  return (
    <>
      <h2>Create contact</h2>
      <div className={styles.form}>
        <div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              <input placeholder="Name" type="text" name="name" required />
            </label>

            <label>
              <input
                placeholder="Phone number"
                type="tel"
                name="number"
                required
              />
            </label>

            <button className={styles.button} type="submit">
              Add Contact
              <VscAdd />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
