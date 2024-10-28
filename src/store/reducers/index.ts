import { combineReducers } from "redux";
import userReducer from "./ducks/login/userReducer";
import tasksReducer from "./ducks/Tasks/tasksReducer";
import usersReducer from "./ducks/Users/usersReducer";
import userDetailReducer from "./ducks/Users/userReducer";
const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  userDetail: userDetailReducer,
  tasks: tasksReducer,
});

export default rootReducer;
