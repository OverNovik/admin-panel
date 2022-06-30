import { ApolloClient, InMemoryCache } from "@apollo/client";

export const ApolloClientConfig = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});
