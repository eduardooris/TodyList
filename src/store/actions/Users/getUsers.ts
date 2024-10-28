import { TYPE_USERS, User } from "../../../interface/User";

const setUsersRequest = (payload: string) => ({
  type: TYPE_USERS.GET_USERS_REQUEST,
  payload,
});

const setUsersSuccess = (payload: [User]) => ({
  type: TYPE_USERS.GET_USERS_SUCCESS,
  payload,
});

const setUsersFailure = (error: any) => ({
  type: TYPE_USERS.GET_USERS_FAILURE,
  error,
});

export { setUsersRequest, setUsersSuccess, setUsersFailure };
