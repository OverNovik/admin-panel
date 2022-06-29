import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Layout } from "antd";
import config from "configs";
import { AuthProvider } from "../providers";
import { Footer, Header, Main } from "./components";
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <ApolloProvider client={config}>
      <AuthProvider>
        <Layout className={styles.layout}>
          <Header />
          <Main />
          <Footer />
        </Layout>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
