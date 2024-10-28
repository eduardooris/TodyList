import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../interface/rootReducer";
import { setUsersRequest } from "../../../store/actions/Users/getUsers";
import { useEffect } from "react";

export const useUsersLogic = () => {
  const dispatch = useDispatch();
  const { auth, users, loading, error } = useSelector((state: RootState) => {
    return {
      users: state.users.users,
      loading: state.users.loading,
      error: state.users.error,
      auth: state.user.user,
    };
  });

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    if (auth?.id) {
      dispatch(setUsersRequest(auth?.id));
    }
  };

  return { loading, users, error };
};
