import axios from "axios";
import { departments } from "../interfaces/interfaces";
import { getDepError, getDepRequest, getDepSuccess, timerGetDepartment } from "./sliceCacheList";
import { getDetailsUserError, getDetailsUserRequest, getDetailsUserSuccess } from "./sliceDetailsUser";
import { updateList } from "./sliceUsersList";
import { AppDispatch } from "./store";


export function getUsersList(department: departments) {
  return async (dispatch: AppDispatch) => {
    dispatch(getDepRequest());
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}?__example=${department}`);
      dispatch(getDepSuccess({depList: response.data.items, department}));
      dispatch(updateList(response.data.items));
      setTimeout(() => {
        dispatch(timerGetDepartment(department));
      }, 5 * 60 * 1000);
    } catch (e: any) {
      dispatch(getDepError(e.message));
    };
  };
};

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