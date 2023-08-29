import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishlistReducer = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      return [...state, action.payload];
    },
    removeFromWishlist: (state, action) => {
      return (state = state.filter((t) => t.id !== action.payload));
    },
    // incrementItem:(state,action)=>{

    // },
    deleteAllItem: (state, action) => {
      return (state = []);
    },
  },
});

export const { addToWishlist, removeFromWishlist, deleteAllItem } = wishlistReducer.actions;

export default wishlistReducer.reducer;