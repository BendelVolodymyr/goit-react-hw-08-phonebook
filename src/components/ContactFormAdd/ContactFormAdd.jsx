import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './ContactFormAdd.module.css';
import { addContact } from '../../redux/contacts/operations';
import { IoPersonAddOutline } from 'react-icons/io5';
import { useContacts } from 'hooks/useContacts';
import { useAuth } from 'hooks/useAuth';

export const ContactFormAdd = () => {
  const dispatch = useDispatch();
  const { contacts } = useContacts();
  const { user } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value.trim();
    const number = e.currentTarget.elements.number.value.trim();

    const validForm = contacts.some(function (element) {
      return (
        element.name.toLowerCase() === name.toLowerCase() ||
        element.phone === number
      );
    });

    if (validForm) {
      alert(`${user.name} The contact is already in your book`);
    } else {
      dispatch(
        addContact({
          name: name,
          number: number,
        })
      );
      e.currentTarget.reset();
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

            <button type="submit">
              <IoPersonAddOutline />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
