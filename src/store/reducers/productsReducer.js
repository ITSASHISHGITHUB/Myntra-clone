import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      return state=action.payload;
    },
    removeFromBag: (state, action) => {
      return (state = state.filter((t) => t.id !== action.payload));
    },
    // incrementItem:(state,action)=>{

    // },
    deleteAllItem: (state, action) => {
      return (state = []);
    },
  },
});

export const { addProducts, removeFromBag, deleteAllItem } = productsReducer.actions;

export default productsReducer.reducer;
