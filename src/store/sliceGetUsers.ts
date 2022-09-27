import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IGetUsers, IUser } from "../interfaces/interfaces";
import { AppDispatch } from "./store";

const initialState: IGetUsers = {
  loading: false,
  error: null,
  list: []
};

export const sliceGetUsers = createSlice({
  name: 'sliceGetUsers',
  initialState,
  reducers: {
    getUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess: (state, actions: PayloadAction<IUser[]>) => {
      state.loading = false;
      state.error = null;
      state.list = actions.payload;
    },
    getUsersError: (state, actions: PayloadAction<string>) => {
      state.loading = false;
      state.error = actions.payload;
    }
  }
});

export const {
  getUsersRequest,
  getUsersSuccess,
  getUsersError
} = sliceGetUsers.actions;

export const getUsersList = (department: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(getUsersRequest());
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}?__example=${department}`);
      console.log(response);
      dispatch(getUsersSuccess(response.data));
    } catch (e: any) {
      console.log(e.message);
      
      dispatch(getUsersError(e.message));
    };
  };
};

// __code=
// string

// __dynamic=
// boolean
// Тип моковых данных.

// __example=
// string
// Параметр фильтрации пользователей по полю "department"

export default sliceGetUsers.reducer;