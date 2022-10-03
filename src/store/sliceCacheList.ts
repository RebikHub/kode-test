import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { departments, IGetDepUsers, IUser } from "../interfaces/interfaces";

const initialState: IGetDepUsers = {
  loading: false,
  error: null,
  list: {
      all: {
        depList: null,
        timer: false
      },
      design: {
        depList: null,
        timer: false
      },
      analytics: {
        depList: null,
        timer: false
      },
      management: {
        depList: null,
        timer: false
      },
      ios: {
        depList: null,
        timer: false
      },
      android: {
        depList: null,
        timer: false
      },
    }
  };

export const sliceCacheList = createSlice({
  name: 'sliceCacheList',
  initialState,
  reducers: {
    getDepRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getDepSuccess: (state, actions: PayloadAction<{ depList: IUser[], department: departments}>) => {
      state.loading = false;
      state.error = null;
      const { department, depList } = actions.payload;
      state.list[department].depList = depList;
      state.list[department].timer = true;
    },
    getDepError: (state, actions: PayloadAction<string>) => {
      state.loading = false;
      state.error = actions.payload;
    },
    timerGetDepartment: (state, actions: PayloadAction<departments>) => {
      state.list[actions.payload].timer = false;
    }
  }
});

export const {
  getDepRequest,
  getDepSuccess,
  getDepError,
  timerGetDepartment
} = sliceCacheList.actions;

export default sliceCacheList.reducer;