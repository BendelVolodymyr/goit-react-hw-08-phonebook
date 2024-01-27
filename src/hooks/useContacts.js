import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
  selectResultContact,
} from '../redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const contactsAndFilter = useSelector(selectResultContact);

  return {
    contacts,
    isLoading,
    error,
    filter,
    contactsAndFilter,
  };
};
