import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IGetUsers, IUser } from "../interfaces/interfaces";
import { compareDate } from "../utils/utils";
import { AppDispatch } from "./store";

const initialState: IGetUsers = {
  loading: false,
  error: null,
  list: [],
  sorting: false,
  sortingDate: false,
};

export const sliceGetUsers = createSlice({
  name: 'sliceGetUsers',
  initialState,
  reducers: {
    getUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.list = null;
    },
    getUsersSuccess: (state, actions: PayloadAction<IUser[]>) => {
      state.loading = false;
      state.error = null;
      state.list = actions.payload;
      state.sorting = false;
    },
    getUsersError: (state, actions: PayloadAction<string>) => {
      state.loading = false;
      state.error = actions.payload;
    },
    sortAlphabet: (state) => {
      if (state.list) {
        const sortArray = state.list.sort((a, b) => {
          if ( a.firstName < b.firstName ){
            return -1;
          };
          if ( a.firstName > b.firstName ){
            return 1;
          };
          return 0;
        });
        state.list = [...sortArray];
        state.sorting = true;
      };
    },
    sortBirthday: (state) => {
      if (state.list) {
        state.list.map((e) => e.birthdayShort = new Date(e.birthday).toLocaleDateString('ru', { month: 'short', day: 'numeric' }));
        const sortArray = state.list.sort((a, b) => compareDate(b.birthday)- compareDate(a.birthday));
        console.log(sortArray);
        
        state.list = [...sortArray];
        state.sorting = true;
        state.sortingDate = true;
      };
    }
  }
});

export const {
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
  sortAlphabet,
  sortBirthday
} = sliceGetUsers.actions;

export const getUsersList = (department: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(getUsersRequest());
    console.log(department);
    
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}?__example=${department}`);
      console.log(response);
      dispatch(getUsersSuccess(response.data.items));
    } catch (e: any) {
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