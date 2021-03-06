import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Layout } from "antd";
import { apolloClient } from "configs";
import { AuthProvider } from "providers";
import { Footer, Header, Main } from "./components";
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
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
