import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "../components";
import {
  AlbumsPage,
  CreateAlbumsPage,
  EditPage,
  LoginPage,
  NotFoundPage,
  PhotoInfoPage,
  ShowPage,
} from "../pages";
import { AuthProvider, PrivateRoute, PublicRoute } from "../utils";
import styles from "./App.module.css";

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
                  path="/albums"
                  element={
                    <PrivateRoute>
                      <AlbumsPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/albums/create"
                  element={
                    <PrivateRoute>
                      <CreateAlbumsPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/albums/:id"
                  element={
                    <PrivateRoute>
                      <ShowPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/albums/:id/edit"
                  element={
                    <PrivateRoute>
                      <EditPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/albums/:id/photos/:id"
                  element={
                    <PrivateRoute>
                      <PhotoInfoPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PublicRoute>
                      <LoginPage />
                    </PublicRoute>
                  }
                />
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
