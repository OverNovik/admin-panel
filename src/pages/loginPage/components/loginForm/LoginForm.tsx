import * as React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks";
import styles from "./LoginForm.module.css";

const LoginForm: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const onFinish = () => {
    auth.logIn(new Date().toString());
    navigate("/albums");
  };

  return (
    <Form
      size="large"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ sm: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
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
