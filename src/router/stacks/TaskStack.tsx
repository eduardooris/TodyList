import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../Pages/Home/View/Home";
import CreateTask from "../../Pages/Home/View/CreateTask";
const { Navigator, Screen } = createNativeStackNavigator();

const options = {
  headerShown: false,
};

export default function TaskStack() {
  return (
    <Navigator
      screenOptions={{
        animation: "fade",
        headerShown: false,
      }}
      initialRouteName="Users"
    >
      <Screen name="Tasks" component={Home} />
      <Screen name="CreateTask" component={CreateTask} />
    </Navigator>
  );
}
