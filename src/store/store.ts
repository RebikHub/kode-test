import { configureStore } from "@reduxjs/toolkit";
import sliceModalSort from "./sliceModalSort";

export const store = configureStore({
  reducer: {
    sliceModalSort
  },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;