import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { UpdateInExistingContact } from '../../redux/contacts/operations';

const modalRoot = document.querySelector('#modal__root');

export const Modal = ({ item, toogle }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: item.name, number: item.number });

  const { name, number } = form;
  const handleChange = ({ target: { name, value } }) => {
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newObj = { name, number, id: item.id };
    dispatch(UpdateInExistingContact(newObj));
    toogle();
  };

  return createPortal(
    <div className={styles.modal__backdrop}>
      <div className={styles.modal__box}>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              autoComplete="name"
              onChange={handleChange}
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              type="phone"
              name="number"
              value={number}
              autoComplete="phone"
              onChange={handleChange}
            />
          </label>
          <button type="submit">Edit contact</button>
        </form>
      </div>
    </div>,
    modalRoot
  );
};
