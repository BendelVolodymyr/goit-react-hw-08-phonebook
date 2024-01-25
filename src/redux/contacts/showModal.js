import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  showModal: false,
  item: { id: null, name: null, number: null },
};
const showModalSlice = createSlice({
  name: 'showModal',
  initialState,
  reducers: {
    setShowModal: (state, { payload }) => {
      const resultModal = state.showModal;
      state.showModal = !resultModal;
      state.item = payload;
    },
  },
});

export const { setShowModal } = showModalSlice.actions;

export const showModalReducer = showModalSlice.reducer;
