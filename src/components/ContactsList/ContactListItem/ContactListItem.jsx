import React, { useState } from 'react';
import styles from '../ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/operations';
import { Modal } from 'components/Modal/Modal';
import { VscEdit } from 'react-icons/vsc';
import { AiOutlineUserDelete } from 'react-icons/ai';

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
        <div className={styles.list__box_contact}>
          <b>{item.name}</b> <b>{item.number}</b>
        </div>
        <button type="button" onClick={toogle}>
          <VscEdit />
        </button>
        <button type="button" onClick={() => handleDelete(item.id)}>
          <AiOutlineUserDelete />
        </button>
      </li>
      {showModal && <Modal item={item} toogle={toogle} />}
    </>
  );
};
