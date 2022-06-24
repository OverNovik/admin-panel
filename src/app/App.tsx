import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import client from "configs/configs";
import { Footer, Header } from "../components";
import * as Pages from "../pages";
import { AuthProvider, PrivateRoute, PublicRoute } from "../utils";
import styles from "./App.module.css";

const { Content } = Layout;

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
                  path="/albums"
                  element={
                    <PrivateRoute>
                      <Pages.AlbumsPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/albums/create"
                  element={
                    <PrivateRoute>
                      <Pages.CreateAlbumsPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/albums/:id"
                  element={
                    <PrivateRoute>
                      <Pages.ShowPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/albums/:id/edit"
                  element={
                    <PrivateRoute>
                      <Pages.EditPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/albums/:id/photos/:id"
                  element={
                    <PrivateRoute>
                      <Pages.PhotoInfoPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PublicRoute>
                      <Pages.LoginPage />
                    </PublicRoute>
                  }
                />
                <Route path="*" element={<Pages.NotFoundPage />} />
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
