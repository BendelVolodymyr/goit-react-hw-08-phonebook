import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { useContacts } from '../../hooks/useContacts';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../../redux/contacts/showModal';
import { useEffect } from 'react';
import { UpdateInExistingContact } from '../../redux/contacts/operations';

const modalRoot = document.querySelector('#modal__root');

export const Modal = () => {
  const { itemModal } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        return dispatch(setShowModal({ id: null, name: null, number: null }));
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleDropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(setShowModal({ id: null, name: null, number: null }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value.trim();
    const number = e.currentTarget.elements.number.value.trim();

    const objectToApi = { id: itemModal.id, name: name, number: number };

    const validForm = name === '' || number === '';

    if (!validForm) {
      dispatch(UpdateInExistingContact(objectToApi));
    } else {
      alert('Друже поле не може бути пустим');
    }
  };

  return createPortal(
    <div className={styles.modal__backdrop} onClick={handleDropClick}>
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
              defaultValue={itemModal.name}
              autoComplete="name"
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              type="phone"
              name="number"
              defaultValue={itemModal.number}
              autoComplete="phone"
            />
          </label>
          <button type="submit">Edit contact</button>
        </form>
      </div>
    </div>,
    modalRoot
  );
};
