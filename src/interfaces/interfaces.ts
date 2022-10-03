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

export interface IGetDetails extends IStatus {
  user: IUser | null;
};

export interface IGetDepUsers extends IStatus{
  list: {
    all: IDepList;
    design: IDepList;
    analytics: IDepList;
    management: IDepList;
    ios: IDepList;
    android: IDepList;
  }
};

export interface IDepList {
  depList: Array<IUser> | null;
  timer: boolean;
};

export type departments = 'all' | 'design' | 'analytics' | 'management' | 'ios' | 'android';