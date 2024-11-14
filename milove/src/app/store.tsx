import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer.tsx";

export const store = configureStore({
  reducer: { data: rootReducer },
});