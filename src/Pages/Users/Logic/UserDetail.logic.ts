import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../interface/rootReducer";
import { setUserDetailRequest } from "../../../store/actions/Users/getUser";

export const useDetailLogic = ({ route }: any) => {
  const { params } = route;
  const dispatch = useDispatch();
  const { loading, tasks, user, error } = useSelector((state: RootState) => {
    return {
      user: state.userDetail.user,
      tasks: state.userDetail.user?.tasks,
      loading: state.userDetail.loading,
      error: state.userDetail.error,
    };
  });

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = () => {
    dispatch(setUserDetailRequest(params));
  };

  return { loading, tasks, user, error };
};
