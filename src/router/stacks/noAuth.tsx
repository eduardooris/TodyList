import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../Pages/Auth/View/Login";
import Register from "../../Pages/Auth/View/Register";
const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Navigator
      screenOptions={{
        animation: "fade",
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}
