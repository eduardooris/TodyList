import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../interface/rootReducer";
import If from "../components/If";
import AppStack from "./stacks/isAuth";
import AuthStack from "./stacks/noAuth";

export default function Router() {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  return (
    <NavigationContainer>
      <If condition={isAuth}>
        <AppStack />
      </If>

      <If condition={!isAuth}>
        <AuthStack />
      </If>
    </NavigationContainer>
  );
}
