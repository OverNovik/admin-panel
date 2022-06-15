/* eslint-disable no-console */
import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const CreateAlbumsForm: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 30 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input your Title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="User"
        name="user"
        rules={[{ required: true, message: "Please input your User!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="link" onClick={() => navigate("/albums")}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateAlbumsForm;
