interface Task {
  id: string;
  title: string;
  isn_usuario: string;
  description: string;
  completed: boolean;
  date: string;
  comments: [comments];
}

interface comments {
  id: string;
  isn_usuario: string;
  comment: string;
  dsc_annejo: string;
  date: string;
}

enum TYPE_TASKS {
  GET_TASKS_REQUEST = "GET_TASKS_REQUEST",
  GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS",
  GET_TASKS_FAILURE = "GET_TASKS_FAILURE",
  UPDATE_TASKS_REQUEST = "UPDATE_TASKS_REQUEST",
  DELETE_TASKS_REQUEST = "DELETE_TASKS_REQUEST",
  ADD_TASK_COMMENT = "ADD_TASK_COMMENT",
}

interface TasksState {
  tasks: [Task] | null;
  loading: boolean;
  error: string | null;
}

export { Task, comments, TYPE_TASKS, TasksState };
