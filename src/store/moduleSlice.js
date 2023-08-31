import { createSlice } from "@reduxjs/toolkit";

  export const moduleSlice = createSlice({
  name: module,
  initialState: {
    isOpened: false,
    isConfirmed: "",
    isDecinend: "",
  },
  reducers: {
    openedModal(state, { payload }) {
      state.isOpened = !state.isOpened;
      state.isConfirmed = payload.title;
      state.isDecinend = payload.message;
    },
    closeTodo(state) {
      state.isOpened = null;
    },
  },
});

export const { openedModal, closeTodo } = moduleSlice.actions;


