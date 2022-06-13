import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Layout, Typography } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, NotFoundPage } from "./pages";
import Main from "./pages/main/Main";
import { AuthProvider, PrivateRoute } from "./utils";
// eslint-disable-next-line css-modules/no-unused-class
import styles from "./style.module.css";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Layout className={styles.layout}>
          <Header className={styles.header}>
            <Title
              level={2}
              // eslint-disable-next-line css-modules/no-undef-class
              className={styles.headertitle}
            >
              Admin-panel
            </Title>
          </Header>
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
          <Footer className={styles.footer}>
            Ant Design ©2022 Created by OverNovik
          </Footer>
        </Layout>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
