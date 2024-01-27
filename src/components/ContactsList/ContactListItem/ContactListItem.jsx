import React, { useState } from 'react';
import styles from '../ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/operations';
import { Modal } from 'components/Modal/Modal';

export const ContactListItem = ({ item }) => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const toogle = () => {
    setShowModal(prevState => !prevState);
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <li key={item.id} className={styles.list}>
        <p>
          <b>{item.name}</b> <b>{item.number}</b>
        </p>
        <button type="button" onClick={toogle}>
          Edit
        </button>
        <button type="button" onClick={() => handleDelete(item.id)}>
          Delete
        </button>
      </li>
      {showModal && <Modal item={item} toogle={toogle} />}
    </>
  );
};
