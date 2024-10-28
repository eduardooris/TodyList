import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Users from "../../Pages/Users/View/Users";
import DetailUser from "../../Pages/Users/View/DetailUser";
const { Navigator, Screen } = createNativeStackNavigator();
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "fade",
};

export default function UserStack() {
  return (
    <Navigator screenOptions={screenOptions} initialRouteName="Users">
      <Screen name="Users" component={Users} />
      <Screen name="DetailUser" component={DetailUser} />
    </Navigator>
  );
}
