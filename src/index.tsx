import React from "react";
import ReactDOM from "react-dom/client";
import 'antd/dist/antd.min.css';
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
  cache: new InMemoryCache,
  uri: 'https://graphqlzero.almansi.me/api',
})

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
