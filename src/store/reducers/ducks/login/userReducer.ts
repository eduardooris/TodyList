import { UserState, TYPE_USER } from "../../../../interface/User";
import { Action } from "../../../../interface/rootReducer";

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  isAuth: false,
};

const userReducer = (
  state: UserState = initialState,
  action: Action
): UserState => {
  switch (action.type) {
    case TYPE_USER.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        isAuth: false,
      };

    case TYPE_USER.LOGOUT:
      return initialState;

    case TYPE_USER.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        isAuth: false,
      };
    case TYPE_USER.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuth: true,
      };
    case TYPE_USER.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error || "Unknown error",
        isAuth: false,
      };
    default:
      return state;
  }
};

export default userReducer;
