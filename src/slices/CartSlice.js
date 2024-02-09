import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

  //   cart: [
  //     {
  //       _id: 123456,
  //       name: "Living room sofa",
  //       quantity: 2,
  //       price: 100,
  //       totalPrice: 200,
  //     },
  //   ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = _id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateItem(state, action) {},
    increaseItem(state, action) {},
    decreaseItem(state, action) {},
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  updateItem,
  increaseItem,
  decreaseItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

// look into "reselect library" === it helps in optimizing useSelector() performance issues
