import { useContacts } from 'hooks/useContacts';
import styles from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { ContactListItem } from './ContactListItem/ContactListItem';

export const ContactsList = () => {
  const { contacts, contactsAndFilter } = useContacts();

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
          <ContactListItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};
