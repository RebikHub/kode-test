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
};

export interface IGetUsers extends IStatus {
  list: Array<IUser> | null;
};