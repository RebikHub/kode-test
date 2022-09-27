import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import sliceModalSort from "./sliceModalSort";
import sliceGetUsers from "./sliceGetUsers";

export const store = configureStore({
  reducer: {
    sliceModalSort,
    sliceGetUsers
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;