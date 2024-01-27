import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', JSON.stringify(obj), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const UpdateInExistingContact = createAsyncThunk(
  'contacts/UpdateInExistingContact',
  async (obj, { rejectWithValue }) => {
    const { id, name, number } = obj;
    try {
      const { data } = await axios.patch(`/contacts/${id}`, {
        name: name,
        number: number,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
