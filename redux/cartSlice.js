import { createNextState, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    addQuantity: (state, action) => {
      const productToUpdate = state.products.find(
        (product) => product._id === action.payload._id
      );
      const newQuantity =
        parseInt(productToUpdate.quantity) + parseInt(action.payload.quantity);
      productToUpdate.quantity = newQuantity.toString();
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const { addProduct, addQuantity, reset } = cartSlice.actions;
export default cartSlice.reducer;
