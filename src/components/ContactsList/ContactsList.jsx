import { useContacts } from 'hooks/useContacts';
import styles from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { setShowModal } from '../../redux/contacts/showModal';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const { contacts, contactsAndFilter } = useContacts();

  const handleRemove = item => {
    dispatch(setShowModal(item));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <h3>Your phonebook has {contacts.length} contacts</h3>
      {contactsAndFilter.length > 0 ? (
        <h3>contacts found {contactsAndFilter.length} </h3>
      ) : (
        <h3>Contact not found</h3>
      )}
      <ul className={styles.list__box}>
        {contactsAndFilter.map(item => (
          <li key={item.id} className={styles.list}>
            <p>
              <b>{item.name}</b> <b>{item.number}</b>
            </p>
            <button type="button" onClick={() => handleRemove(item)}>
              Edit
            </button>
            <button type="button" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
