import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../interface/rootReducer";
import { setUserDetailRequest } from "../../../store/actions/Users/getUser";
import {
  setHideTabBar,
  setShowTabBar,
} from "../../../hooks/useVisibilityTabBar";
import IO, { Socket } from "socket.io-client";
import { User } from "../../../interface/User";
import { Task } from "../../../interface/Taks";
interface IDetailUser {
  route: {
    params: User;
  };
}

export const useDetailLogic = ({ route }: IDetailUser) => {
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

  const [selectTask, setSelectTask] = useState<Task | null>(null);

  const socket = useRef<Socket | undefined>();
  const detailTaskRef = useRef<any>(null);
  useEffect(() => {
    socket.current = IO("http://192.168.100.23:3000", {
      transports: ["websocket"],
    });

    socket.current.on("connect", () => {
      socket.current?.emit("joinTaskRoom", params.id);
    });

    socket.current.on("updateTask", (e) => {
      getUserDetail();
    });

    return () => {
      socket.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    getUserDetail();

    setHideTabBar();

    return () => setShowTabBar();
  }, []);

  const getUserDetail = () => {
    dispatch(setUserDetailRequest(params));
  };

  const showDetailTask = (task: Task) => {
    setSelectTask(task);
    detailTaskRef.current?.expand();
  };

  return {
    loading,
    tasks,
    user,
    error,
    showDetailTask,
    selectTask,
    detailTaskRef,
  };
};
