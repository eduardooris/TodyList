import { UserDetailState, TYPE_USER_DETAIL } from "../../../../interface/User";
import { Action } from "../../../../interface/rootReducer";
const initialState: UserDetailState = {
  user: null,
  loading: false,
  error: null,
};

const userDetailReducer = (
  state: UserDetailState = initialState,
  action: Action
): UserDetailState => {
  switch (action.type) {
    case TYPE_USER_DETAIL.GET_USER_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case TYPE_USER_DETAIL.GET_USER_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case TYPE_USER_DETAIL.GET_USER_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error || "Unknown error",
      };
    default:
      return state;
  }
};

export default userDetailReducer;
