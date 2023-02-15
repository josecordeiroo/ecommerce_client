import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  reducers: {
    addProduct: (state, action) => {
        state.quantity += 1;
        state.products.push(action.payload.product);
        state.total += action.payload.price;
    },
    removeProduct: (state, action) => {
        state.quantity === 0 ? state.quantity = 0 : state.quantity -= 1;
    }
  }
});


export const {addProduct} = cartSlice.actions
export default cartSlice.reducer