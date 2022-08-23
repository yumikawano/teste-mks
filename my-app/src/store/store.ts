import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cardSlice"

const store = configureStore({
  reducer: {
    cartData: cartReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>