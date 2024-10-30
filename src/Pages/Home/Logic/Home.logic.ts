import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../interface/rootReducer";
import {
  setCommentTask,
  setDeleteTask,
  setTasksRequest,
  setTasksUpdate,
} from "../../../store/actions/Task";
import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { Task } from "../../../interface/Taks";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  setHideTabBar,
  setShowTabBar,
} from "../../../hooks/useVisibilityTabBar";
import { useForm } from "../../../hooks/useForm";
import IO, { Socket } from "socket.io-client";
export const useHome = () => {
  const dispatch = useDispatch();
  const [selectTask, setSelectTask] = useState<Task | null>(null);

  const [form, setForm] = useForm({
    comment: "",
  });

  const { tasks, error, loading, user } = useSelector((state: RootState) => {
    return {
      user: state.user.user,
      tasks: state.tasks.tasks,
      loading: state.tasks.loading,
      error: state.tasks.error,
    };
  });

  const comments = useMemo(() => {
    return tasks?.find((task) => task.id == selectTask?.id)?.comments;
  }, [tasks, selectTask]);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => {
    return ["1%", "25%", "50%"];
  }, []);

  const showModal = useCallback((task: Task) => {
    setHideTabBar();
    setSelectTask(task);
    bottomSheetRef.current?.expand();
  }, []);

  const handleSheetChange = useCallback((index: number) => {
    if (index == 0) {
      setShowTabBar();
    }
  }, []);

  const hideModal = useCallback(() => {
    bottomSheetRef.current?.close();
    setSelectTask(null);
    setShowTabBar();
  }, []);

  const updateTasks = () => {
    dispatch(
      setTasksUpdate({ id: selectTask?.id, completed: !selectTask?.completed })
    );
    hideModal();
  };

  const deleteTask = () => {
    dispatch(setDeleteTask(selectTask?.id || ""));
    hideModal();
  };

  const addComment = () => {
    setForm({ comment: "" });
    dispatch(
      setCommentTask({
        id: selectTask?.id,
        comment: form.comment,
        isn_usuario: user?.id,
      })
    );
  };

  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    socket.current = IO("http://192.168.100.23:3000", {
      transports: ["websocket"],
    });

    socket.current.on("connect", () => {
      socket.current?.emit("joinTaskRoom", user?.id);
    });

    socket.current.on("updateTask", () => {
      dispatch(setTasksRequest({ isn_usuario: user?.id }));
    });

    return () => {
      socket.current?.disconnect();
    };
  }, []);

  return {
    tasks,
    error,
    loading,
    updateTasks,
    deleteTask,
    hideModal,
    showModal,
    snapPoints,
    handleSheetChange,
    bottomSheetRef,
    form,
    setForm,
    addComment,
    comments,
  };
};
