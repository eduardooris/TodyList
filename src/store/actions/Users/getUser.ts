import { TYPE_USER_DETAIL, UserDetail } from "../../../interface/User";

const setUserDetailRequest = (payload: string) => ({
  type: TYPE_USER_DETAIL.GET_USER_DETAIL_REQUEST,
  payload,
});

const setUserDetailSuccess = (payload: UserDetail) => ({
  type: TYPE_USER_DETAIL.GET_USER_DETAIL_SUCCESS,
  payload,
});

const setUserDetailFailure = (error: string) => ({
  type: TYPE_USER_DETAIL.GET_USER_DETAIL_FAILURE,
  error,
});

export { setUserDetailRequest, setUserDetailSuccess, setUserDetailFailure };
