import { createSlice } from "@reduxjs/toolkit";
import { addUserCart } from "../../service/CartService";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cart = state.cartItems;
      const findDuplicate = cart?.find(
        (items) => items.id === action.payload.data.id
      );
      if (!findDuplicate) {
        state.cartItems = [...cart, { ...action.payload.data, quantity: 1 }];
      } else {
        state.cartItems = cart?.map((item) =>
          item.id === action.payload.data.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      const session_token = sessionStorage.getItem("session_token");
      if (session_token) {
        addUserCart({ data: state.cartItems, id: action.payload.id });
      }
    },
  },
});

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
