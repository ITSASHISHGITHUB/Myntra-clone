import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const bagReducer = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addToBag: (state, action) => {
      return [...state, action.payload];
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

export const { addToBag, removeFromBag, deleteAllItem } = bagReducer.actions;

export default bagReducer.reducer;
