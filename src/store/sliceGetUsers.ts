import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IGetUsers, IUser } from "../interfaces/interfaces";
import { compareDate, compareSearch } from "../utils/utils";
import { AppDispatch } from "./store";

const initialState: IGetUsers = {
  loading: false,
  error: null,
  list: [],
  sorting: false,
  sortingDate: false,
  searchedList: []
};

export const sliceGetUsers = createSlice({
  name: 'sliceGetUsers',
  initialState,
  reducers: {
    getUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.list = null;
      state.searchedList = null;
      state.sortingDate = false;
      state.sorting = false;
    },
    getUsersSuccess: (state, actions: PayloadAction<IUser[]>) => {
      state.loading = false;
      state.error = null;
      state.list = actions.payload;
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
        state.list.map((e) => e.birthdayShort = new Date(e.birthday).toLocaleDateString('ru', { month: 'short', day: 'numeric' }).replace(/\.$/, ''));
        const sortArray = state.list.sort((a, b) => compareDate(b.birthday)- compareDate(a.birthday));
        state.list = [...sortArray];
        state.sorting = true;
        state.sortingDate = true;
      };
    },
    searchUser: (state, actions: PayloadAction<string>) => {
      if (state.list) {
        const searchArray = [...state.list]
        state.searchedList = searchArray.filter((e) => compareSearch(e.firstName, e.lastName, e.userTag, actions.payload));
      };
    }
  }
});

export const {
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
  sortAlphabet,
  sortBirthday,
  searchUser
} = sliceGetUsers.actions;

export const getUsersList = (department: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(getUsersRequest());
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