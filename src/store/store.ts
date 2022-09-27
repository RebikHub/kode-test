import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import sliceModalSort from "./sliceModalSort";
import sliceGetUsers from "./sliceGetUsers";
import sliceChoiceDep from "./sliceChoiceDep";

export const store = configureStore({
  reducer: {
    sliceModalSort,
    sliceGetUsers,
    sliceChoiceDep
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;