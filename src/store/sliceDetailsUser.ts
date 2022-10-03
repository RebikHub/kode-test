import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetDetails, IUser } from "../interfaces/interfaces";

const initialState: IGetDetails = {
  loading: false,
  error: null,
  user: null
};

export const sliceDetailsUser = createSlice({
  name: 'sliceDetailsUser',
  initialState,
  reducers: {
    getDetailsUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getDetailsUserSuccess: (state, actions: PayloadAction<IUser>) => {
      state.loading = false;
      state.error = null;
      state.user = actions.payload;
    },
    getDetailsUserError: (state, actions: PayloadAction<string>) => {
      state.loading = false;
      state.error = actions.payload;
    },
    addUser: (state, actions: PayloadAction<IUser | null>) => {
      state.user = actions.payload;
    }
   }
});

export const {
  getDetailsUserRequest,
  getDetailsUserSuccess,
  getDetailsUserError,
  addUser
} = sliceDetailsUser.actions;

export default sliceDetailsUser.reducer;