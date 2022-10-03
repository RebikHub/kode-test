import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import sliceModalSort from "./sliceModalSort";
import sliceUsersList from "./sliceUsersList";
import sliceChoiceDep from "./sliceChoiceDep";
import sliceDetailsUser from "./sliceDetailsUser";
import sliceCacheList from "./sliceCacheList";

export const store = configureStore({
  reducer: {
    sliceModalSort,
    sliceUsersList,
    sliceChoiceDep,
    sliceDetailsUser,
    sliceCacheList
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;