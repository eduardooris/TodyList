import { UsersState, TYPE_USERS } from "../../../../interface/User";
import { Action } from "../../../../interface/rootReducer";

const initialState: UsersState = {
  users: null,
  loading: false,
  error: null,
};

const getUsers = (
  state: UsersState = initialState,
  action: Action
): UsersState => {
  switch (action.type) {
    case TYPE_USERS.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case TYPE_USERS.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case TYPE_USERS.GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error || "Unknown error",
      };
    default:
      return state;
  }
};
export default getUsers;
