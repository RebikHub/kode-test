import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetUsers, IUser } from "../interfaces/interfaces";
import { compareDate, compareSearch } from "../utils/utils";

const initialState: IGetUsers = {
  loading: false,
  error: null,
  list: null,
  sorting: false,
  sortingDate: false,
  searchedList: null,
  searching: false,
};


export const sliceUsersList = createSlice({
  name: 'sliceUsersList',
  initialState,
  reducers: {
    updateList: (state, actions: PayloadAction<IUser[] | null>) => {
      if (actions.payload) {
        state.list = [...actions.payload];
      };
    },
    sortAlphabet: (state) => {
      if (state.list) {
        state.list.map((e) => {
          if (e.yearLine) {
            e.yearLine = null;
          };

          if (e.birthdayShort !== '') {
            e.birthdayShort = '';
          };
          return e;
        });
        state.list.sort((a, b) => {
          if ( a.firstName < b.firstName ){
            return -1;
          };
          if ( a.firstName > b.firstName ){
            return 1;
          };
          return 0;
        });
        state.sorting = true;
      };
    },
    sortBirthday: (state) => {
      if (state.list) {
        state.list.map((e) => e.birthdayShort = new Date(e.birthday).toLocaleDateString('ru', { month: 'short', day: 'numeric' }).replace(/\.$/, ''));
        state.list.sort((a, b) => compareDate(b.birthday)- compareDate(a.birthday));
        const index = state.list.findIndex((e) => e.birthdayShort.includes('ян'));
        if (index !== -1) {
          state.list[index].yearLine = true;
        };
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
        state.searchedList = state.list.filter((e) => compareSearch(e.firstName, e.lastName, e.userTag, actions.payload));
        if (state.searchedList.length === 0) {
          state.searching = true;
        }
      };
    },
    clearStatus: (state) => {
      state.list = null;
      state.searchedList = null;
      state.sortingDate = false;
      state.sorting = false;
      state.searching = false;
    }
  }
});

export const {
  updateList,
  sortAlphabet,
  sortBirthday,
  searchUser,
  clearStatus
} = sliceUsersList.actions;

export default sliceUsersList.reducer;