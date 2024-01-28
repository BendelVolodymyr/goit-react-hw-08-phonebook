import React from 'react';
import { ContactFormAdd } from 'components/ContactFormAdd/ContactFormAdd';
import { useContacts } from '../hooks/useContacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Modal } from 'components/Modal/Modal';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading, showModal } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className="contact">
        <div className="contact__form_box">
          <ContactFormAdd />
          <Filter />
          {isLoading && <h2>Request in progress...</h2>}
          {showModal && <Modal />}
          <ContactsList />
        </div>
      </div>
    </>
  );
};

export default Contacts;
