import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  UpdateInExistingContact,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(contact => contact.id !== payload.id);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(UpdateInExistingContact.pending, handlePending)
      .addCase(UpdateInExistingContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        const index = state.items.findIndex(option => option.id === payload.id);
        state.items[index] = payload;
        // state.items.splice(index, 1, payload);
        state.error = null;
      })
      .addCase(UpdateInExistingContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
