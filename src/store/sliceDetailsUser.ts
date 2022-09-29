import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IGetDetails, IUser } from "../interfaces/interfaces";
import { AppDispatch } from "./store";

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


export const getUser = (id: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(getDetailsUserRequest());
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}?id=${id}`);
      console.log(response);
      dispatch(getDetailsUserSuccess(response.data.items[0]));
    } catch (e: any) {
      dispatch(getDetailsUserError(e.message));
    };
  };
};

export default sliceDetailsUser.reducer;