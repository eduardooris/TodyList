import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApolloLink, from } from "@apollo/client";

export const URL_PRODUCTION = "http://localhost:3000/graphql";

const httpLink = createHttpLink({
  uri: URL_PRODUCTION,
  fetch: (url, options) => {
    return fetch(url, options);
  },
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("@TokenApi");
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

const middlewareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    return response;
  });
});

const client = new ApolloClient({
  link: from([middlewareLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
