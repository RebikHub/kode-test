import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/interfaces";

type State = {
  user: IUser | null
};

const initialState: State = {
  user: null
};

export const sliceDetailsUser = createSlice({
  name: 'sliceDetailsUser',
  initialState,
  reducers: {
    addUser: (state, actions: PayloadAction<IUser | null>) => {
      state.user = actions.payload;
    }
   }
});

export const {
  addUser
} = sliceDetailsUser.actions;

export default sliceDetailsUser.reducer;