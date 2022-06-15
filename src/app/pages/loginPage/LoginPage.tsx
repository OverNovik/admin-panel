import React from "react";
import { Typography } from "antd";
import { LoginForm } from "../../components/index";

const { Title } = Typography;

const LoginPage: React.FC = () => (
  <>
    <Title>Log in</Title>
    <LoginForm />
  </>
);

export default LoginPage;
