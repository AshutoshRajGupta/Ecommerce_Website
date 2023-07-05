import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  // at initial state it will be zero or empty quantity will be zero and total willl be zero
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  // help of reducers
  reducers: {
    // first we are adding some products and increasing quantity and total
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
