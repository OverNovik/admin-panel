import React from "react";
import { Layout } from "antd";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "hooks";
import * as Pages from "pages";
import { PrivateRoute, PublicRoute } from "..";
import styles from "./Main.module.css";

const { Content } = Layout;

const Main: React.FC = () => {
  const auth = useAuth();
  return (
    <Content className={styles.content}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              auth.loggedIn ? (
                <Navigate to="/albums" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
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
  );
};

export default Main;
