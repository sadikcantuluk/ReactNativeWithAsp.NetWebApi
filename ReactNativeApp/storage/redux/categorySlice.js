import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  categoryId: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getAllCategory: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { getAllCategory } = categorySlice.actions;
export default categorySlice.reducer;
