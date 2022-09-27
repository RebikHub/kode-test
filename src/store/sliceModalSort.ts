import { createSlice } from "@reduxjs/toolkit";

type State = {
  modal: boolean
};

const initialState: State = {
  modal: false
};

export const sliceModalSort = createSlice({
  name: 'sliceModalSort',
  initialState: initialState,
  reducers: {
    clickToSort: (state) => {
      state.modal = true;
    },
    closeSort: (state) => {
      state.modal = false;
    }
  }
});

export const {
  clickToSort,
  closeSort
} = sliceModalSort.actions;

export default sliceModalSort.reducer;