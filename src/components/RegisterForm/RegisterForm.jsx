import { useDispatch } from 'react-redux';
import styles from './RegisterForm.module.css';
import { createUser } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      createUser({
        name: form.elements.name.value,

        email: form.elements.email.value,

        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={styles.box__form}>
      <div className={styles.form__box}>
        <h2 className={styles.form__box_title}>Create an account</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Username
            <input type="text" name="name" autoComplete="Username" />
          </label>
          <label className={styles.label}>
            Email
            <input type="email" name="email" autoComplete="Email" />
          </label>
          <label className={styles.label}>
            Password
            <input type="password" name="password" autoComplete="Password" />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
