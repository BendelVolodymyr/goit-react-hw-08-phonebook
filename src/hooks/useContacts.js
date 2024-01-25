import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
  selectItemsModal,
  selectResultContact,
  selectShowModal,
} from '../redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const showModal = useSelector(selectShowModal);
  const filter = useSelector(selectFilter);
  const contactsAndFilter = useSelector(selectResultContact);
  const itemModal = useSelector(selectItemsModal);

  return {
    contacts,
    isLoading,
    error,
    showModal,
    filter,
    contactsAndFilter,
    itemModal,
  };
};
