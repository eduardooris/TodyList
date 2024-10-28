import { useSelector } from "react-redux";
import { RootState } from "../../../interface/rootReducer";

export const useHome = () => {
  const { tasks, error, loading } = useSelector((state: RootState) => {
    return {
      tasks: state.tasks.tasks,
      loading: state.tasks.loading,
      error: state.tasks.error,
    };
  });

  return {
    tasks,
    error,
    loading,
  };
};
