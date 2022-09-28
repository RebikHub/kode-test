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
  searchedList: [],
  searching: false,
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
      state.searching = false;
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
        sortArray.find((e) => {
          if (e.birthdayShort.includes('ян')) {
            return e.yearLine = true;
          };
          return e;
        })
        state.list = [...sortArray];
        state.sorting = true;
        state.sortingDate = true;
      };
    },
    searchUser: (state, actions: PayloadAction<string>) => {
      state.searching = false;
      state.searchedList = null;

      if (actions.payload.trim() === '') {
        state.searching = false;
        state.searchedList = null;
      };
      
      if (state.list) {
        const searchArray = [...state.list]
        state.searchedList = searchArray.filter((e) => compareSearch(e.firstName, e.lastName, e.userTag, actions.payload));
        if (state.searchedList.length === 0) {
          state.searching = true;
        }
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

export default sliceGetUsers.reducer;