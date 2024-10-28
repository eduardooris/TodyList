import { useEffect, useState } from "react";
import useEvetEmitter from "./useEvetEmitter";

export const useVisibilityTabBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleTabBarVisibility = (boolean: boolean) => {
    setIsVisible(boolean);
  };

  useEffect(() => {
    useEvetEmitter.on("hideTabBar", handleTabBarVisibility);

    return () => useEvetEmitter.off("hideTabBar", handleTabBarVisibility);
  }, []);

  return isVisible;
};

export const setHideTabBar = () => {
  useEvetEmitter.emit("hideTabBar", false);
};

export const setShowTabBar = () => {
  useEvetEmitter.emit("hideTabBar", true);
};
