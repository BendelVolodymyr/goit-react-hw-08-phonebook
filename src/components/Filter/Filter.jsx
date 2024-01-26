import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks/useContacts';
import { setFilter } from '../../redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useContacts();
  const showFilteredContacts = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <h2>Filter</h2>
      <label>
        <input
          type="text"
          placeholder="Find contacts by name..."
          value={filter}
          onChange={showFilteredContacts}
        />
      </label>
    </div>
  );
};
