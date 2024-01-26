import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
axios.defaults.headers.accept = '*/*';

const setAuthHeader = token => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.Authorization = '';
};

export const createUser = createAsyncThunk(
  'auth/register',
  async (newObj, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        '/users/signup',
        JSON.stringify(newObj),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const LogIn = createAsyncThunk(
  'auth/login',
  async (newObj, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', newObj);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const LogOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
