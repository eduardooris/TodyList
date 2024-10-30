import { TYPE_TASKS, TasksState } from "../../../../interface/Taks";
import { Action } from "../../../../interface/rootReducer";

const initialState: TasksState = {
  tasks: null,
  loading: false,
  error: null,
};

const tasksReducer = (
  state: TasksState = initialState,
  action: Action
): TasksState => {
  switch (action.type) {
    case TYPE_TASKS.GET_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case TYPE_TASKS.DELETE_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case TYPE_TASKS.GET_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    case TYPE_TASKS.GET_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error || "Unknown error",
      };
    default:
      return state;
  }
};

export default tasksReducer;
