/* eslint-disable no-console */
import * as React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils";
import styles from "./LoginForm.module.css";

const LoginForm: React.FC = () => {
  const auth: any = useAuth();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onFinish = (values: any) => {
    auth.logIn(new Date().toString());
    navigate("/albums");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      size="large"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ sm: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles.login}
    >
      <Form.Item
        label="Email"
        name="Email"
        rules={[
          { type: "email", message: "The input is not valid E-mail!" },
          { required: true, message: "Please input your Email!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
