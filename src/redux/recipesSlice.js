import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk("recipes", async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  const jsonRes = await res.json();
  return jsonRes.recipes;
});

const initialState = {
  items: [],
  status: undefined,
  error: null,
};

const recipesSlice = createSlice({
  name: "recipesSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
  },
});

export default recipesSlice.reducer;
