import { TYPE_TASKS } from "../../../interface/Taks";

const setTasksRequest = (payload: { isn_usuario: string }) => {
  return {
    type: TYPE_TASKS.GET_TASKS_REQUEST,
    payload,
  };
};

const setTasksSuccess = (payload: any) => {
  return {
    type: TYPE_TASKS.GET_TASKS_SUCCESS,
    payload,
  };
};

const setTasksFailure = (error: string) => {
  return {
    type: TYPE_TASKS.GET_TASKS_FAILURE,
    error,
  };
};

export { setTasksRequest, setTasksSuccess, setTasksFailure };
