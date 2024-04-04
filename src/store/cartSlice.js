import { createSlice } from "@reduxjs/toolkit";
const initialCartState = { items: [], totalQuantity: 0, changed: false };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      state.totalQuantity++;
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          price: newItem.price,
          total: newItem.price,
        });
      }
      if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.total + newItem.price;
      }
    },
    deleteItemFromCart(state, action) {
      state.totalQuantity--;
      state.changed = true;
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      }
      if (existingItem) {
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
