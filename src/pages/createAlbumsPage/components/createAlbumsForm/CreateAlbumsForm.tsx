import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { Spinner } from "components";
import { operations, Types } from "./duck";
import styles from "./CreateAlbumsForm.module.css";

const { Option } = Select;

const CreateAlbumsForm: React.FC = () => {
  const navigate = useNavigate();

  const { data, loading: userInfoLoading } = useQuery<
    Types.GetUsersQuery,
    Types.GetUsersQueryVariables
  >(operations.getUsers);

  const [createAlbum, { loading: createLoading }] = useMutation<
    Types.CreateAlbumMutation,
    Types.CreateAlbumMutationVariables
  >(operations.createAlbum);

  const onFinish = async (values: Types.Values) => {
    await createAlbum({
      variables: {
        input: {
          title: values.title,
          userId: values.user,
        },
      },
    });
    navigate(-1);
  };

  if (!data || userInfoLoading || createLoading) {
    return <Spinner />;
  }

  const options = data.users?.data?.map((d) => (
    <Option key={d?.id}>{d?.username}</Option>
  ));

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 30 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      className={styles.create}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          { min: 3 },
          { max: 64 },
          { type: "string" },
          { required: true, message: "Please input your Title!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="User"
        name="user"
        rules={[
          { type: "string" },
          { required: true, message: "Please input your User!" },
        ]}
      >
        <Select
          showSearch
          placeholder="Users"
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          notFoundContent={null}
        >
          {options}
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="link" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateAlbumsForm;
