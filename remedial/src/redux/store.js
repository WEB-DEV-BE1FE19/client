import { configureStore } from "@reduxjs/toolkit";
import user from "./reducer/user";

export const store = configureStore({
  reducer: {
    user,
  },
});
