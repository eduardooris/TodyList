import { TYPE_USER } from "../../../interface/User";

interface User {
  email?: string;
  password?: string;
  username?: string;
}

const setLogin = (payload: User) => {
  return {
    type: TYPE_USER.LOGIN_REQUEST,
    payload,
  };
};

const setLoginSuccess = (payload: User) => {
  return {
    type: TYPE_USER.LOGIN_SUCCESS,
    payload,
  };
};

const setLoginFailure = (error: string) => {
  return {
    type: TYPE_USER.LOGIN_FAILURE,
    error,
  };
};

const setRegister = (payload: User) => {
  return {
    type: TYPE_USER.REGISTER_REQUEST,
    payload,
  };
};

const setInitToken = (payload: string) => {
  return {
    type: TYPE_USER.TOKEN_REQUEST,
    payload,
  };
};

export {
  setLogin,
  setLoginSuccess,
  setLoginFailure,
  setRegister,
  setInitToken,
};
