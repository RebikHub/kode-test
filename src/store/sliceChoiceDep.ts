import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { departments } from "../interfaces/interfaces";

type State = {
  department: {
    menu: string,
    name: departments
  }
};

const initialState: State = {
  department: {
    menu: 'Все',
    name: 'all'
  }
};

export const sliceChoiceDep = createSlice({
  name: 'sliceChoiceDep',
  initialState,
  reducers: {
    swapDepartment: (state, actions: PayloadAction<{
      menu: string,
      name: departments
    }>) => {
      state.department.menu = actions.payload.menu;
      state.department.name = actions.payload.name;
    }
  }
});

export const {
  swapDepartment
} = sliceChoiceDep.actions;

export default sliceChoiceDep.reducer;