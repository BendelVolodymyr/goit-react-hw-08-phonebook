import { useDispatch } from 'react-redux';
import styles from './LoginForm.module.css';
import { LogIn } from '../../redux/auth/operations';
import { Alert } from '@mui/material';
import { useAuth } from 'hooks/useAuth';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { errorFulfilled } = useAuth();
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
        <h2 className={styles.box__form_title}>Sign in</h2>
        {errorFulfilled && (
          <div className={styles.form__box_error}>
            <Alert severity="info" variant="outlined">
              Invalid email or password
            </Alert>
          </div>
        )}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input__box}>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="Email"
              required
            />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
          </div>
          <div className={styles.input__box}>
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="Password"
              required
            />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};
