import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserStack from "./UserStack";
import TabBar from "../components/TabBar";
import TaskStack from "./TaskStack";
import { useVisibilityTabBar } from "../../hooks/useVisibilityTabBar";
import UserProfile from "../../Pages/Settings/View/UserProfile";
import BI from "../../Pages/Relatorio/View/BI";

const { Navigator, Screen } = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

export default function AppStack() {
  const isFocused = useVisibilityTabBar();

  const tabBar = (props: BottomTabBarProps) => {
    return isFocused && <TabBar {...props} />;
  };

  return (
    <Navigator
      tabBar={tabBar}
      screenOptions={screenOptions}
      initialRouteName="Home"
    >
      <Screen name="Home" component={TaskStack} />
      <Screen name="Profile" component={UserStack} />
      <Screen name="BI" component={BI} />
      <Screen name="Settings" component={UserProfile} />
    </Navigator>
  );
}