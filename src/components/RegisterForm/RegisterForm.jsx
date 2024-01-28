import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './RegisterForm.module.css';
import { createUser } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Alert } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { errorFulfilled } = useAuth();

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
    <>
      <div className={styles.box__form__global}>
        <div className={styles.box__form}>
          <h2 className={styles.form__box_title}>Create an account</h2>
          {errorFulfilled && (
            <div className={styles.form__box_error}>
              <Alert severity="info" variant="outlined">
                Such a contact already exists
              </Alert>
            </div>
          )}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.input__box}>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="Username"
                required
              />
              <label htmlFor="name" className={styles.label}>
                Username
              </label>
            </div>
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
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};
