import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  department: string
};

const initialState: State = {
  department: 'all'
};

export const sliceChoiceDep = createSlice({
  name: 'sliceChoiceDep',
  initialState,
  reducers: {
    swapDepartment: (state, actions: PayloadAction<string>) => {
      state.department = actions.payload;
    }
  }
});

export const {
  swapDepartment
} = sliceChoiceDep.actions;

export default sliceChoiceDep.reducer;