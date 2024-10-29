import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../interface/rootReducer";
import { setTasksUpdate } from "../../../store/actions/Task";

export const useHome = () => {
  const dispatch = useDispatch();
  const { tasks, error, loading } = useSelector((state: RootState) => {
    return {
      tasks: state.tasks.tasks,
      loading: state.tasks.loading,
      error: state.tasks.error,
    };
  });

  const updateTasks = ({ id }: { id: string }) => {
    dispatch(setTasksUpdate({ id, completed: true }));
  };

  return {
    tasks,
    error,
    loading,
    updateTasks,
  };
};
