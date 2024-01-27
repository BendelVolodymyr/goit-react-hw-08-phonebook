import { useDispatch } from 'react-redux';
import styles from './LoginForm.module.css';
import { LogIn } from '../../redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      LogIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={styles.box__form__global}>
      <div className={styles.box__form}>
        <h2>Sign in</h2>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="Email"
            />
          </label>
          <label className={styles.label}>
            Password
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="Password"
            />
          </label>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};
