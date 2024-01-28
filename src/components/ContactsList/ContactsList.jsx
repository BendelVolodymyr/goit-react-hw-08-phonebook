import { useContacts } from 'hooks/useContacts';
import styles from './ContactsList.module.css';
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
