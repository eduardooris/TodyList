import { Task } from "./Taks";

interface User {
  id: string;
  token: string;
  email: string;
  username: string;
}

interface UserDetail {
  id: string;
  email: string;
  username: string;
  tasks: [Task];
}

enum TYPE_USERS {
  GET_USERS_REQUEST = "GET_USERS_REQUEST",
  GET_USERS_SUCCESS = "GET_USERS_SUCCESS",
  GET_USERS_FAILURE = "GET_USERS_FAILURE",
}

enum TYPE_USER {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  REGISTER_REQUEST = "REGISTER_REQUEST",
  TOKEN_REQUEST = "TOKEN_REQUEST",
  LOGOUT = "LOGOUT",
}

enum TYPE_USER_DETAIL {
  GET_USER_DETAIL_REQUEST = "GET_USER_DETAIL_REQUEST",
  GET_USER_DETAIL_SUCCESS = "GET_USER_DETAIL_SUCCESS",
  GET_USER_DETAIL_FAILURE = "GET_USER_DETAIL_FAILURE",
}

interface UsersState {
  users: [User] | null;
  loading: boolean;
  error: string | null;
}

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuth: boolean;
}

interface UserDetailState {
  user: UserDetail | null;
  loading: boolean;
  error: string | null;
}

export {
  TYPE_USERS,
  User,
  UsersState,
  UserState,
  TYPE_USER,
  UserDetailState,
  TYPE_USER_DETAIL,
  UserDetail
};
