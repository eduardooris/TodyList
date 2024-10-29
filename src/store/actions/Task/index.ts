import { TYPE_TASKS, Task } from "../../../interface/Taks";

const setTasksRequest = (payload: { isn_usuario: string }) => {
  return {
    type: TYPE_TASKS.GET_TASKS_REQUEST,
    payload,
  };
};

const setTasksSuccess = (payload: Task) => {
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

const setTasksUpdate = (payload: { id: string; completed: boolean }) => {
  return {
    type: TYPE_TASKS.UPDATE_TASKS_REQUEST,
    payload,
  };
};

export { setTasksRequest, setTasksSuccess, setTasksFailure, setTasksUpdate };
