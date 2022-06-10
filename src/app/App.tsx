import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Typography } from "antd";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => (
  <Layout style={{ height: "100vh" }}>
    <Header style={{ background: "#1890ff" }}>
      <Title
        level={2}
        style={{
          textAlign: "left",
          color: "#ffffff",
          textTransform: "uppercase",
        }}
      >
        Admin-panel
      </Title>
    </Header>
    <Content
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2022 Created by OverNovik
    </Footer>
  </Layout>
);

export default App;
