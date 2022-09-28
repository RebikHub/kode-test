export interface IStatus {
  loading: boolean;
  error: null | string;
};

export interface IUser {
  avatarUrl: string;
  birthday: string;
  department: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  position: string;
  userTag: string;
  birthdayShort: string;
  yearLine: boolean | null;
};

export interface IGetUsers extends IStatus {
  list: Array<IUser> | null;
  sorting: boolean;
  sortingDate: boolean;
  searchedList: Array<IUser> | null;
  searching: boolean;
};
