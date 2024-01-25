import React from 'react';
import { ContactFormAdd } from 'components/ContactFormAdd/ContactFormAdd';
import { useContacts } from '../hooks/useContacts';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Modal } from 'components/Modal/Modal';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading, showModal } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactFormAdd />
      <div>{isLoading && 'Request in progress...'}</div>
      {showModal && <Modal />}
      <ContactsList />
    </>
  );
};

export default Contacts;