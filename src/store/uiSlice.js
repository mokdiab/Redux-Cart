import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: { isCartVisible: false, showNotification: null },
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      state.showNotification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
