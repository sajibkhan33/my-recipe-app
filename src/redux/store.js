import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice";
import recipesReducer from "./recipesSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    recipes: recipesReducer,
  },
});

export default store;
