import Router from "./src/router";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import client from "./src/store/apollo";
import store from "./src/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <GestureHandlerRootView>
            <Router />
        </GestureHandlerRootView>
      </Provider>
    </ApolloProvider>
  );
}
