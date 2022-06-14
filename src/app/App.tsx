import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { LoginPage, NotFoundPage } from "./pages";
import Main from "./pages/main/Main";
import { AuthProvider, PrivateRoute } from "./utils";
import styles from "./style.module.css";

const { Content } = Layout;

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Layout className={styles.layout}>
          <Header />
          <Content className={styles.content}>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <Main />
                    </PrivateRoute>
                  }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </BrowserRouter>
          </Content>
          <Footer />
        </Layout>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
