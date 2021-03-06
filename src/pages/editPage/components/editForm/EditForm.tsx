import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "components";
import { operations, Types } from "./duck";
import styles from "./EditForm.module.css";

const { Option } = Select;

const EditForm: React.FC = () => {
  const navigate = useNavigate();
  const { id = "" } = useParams();

  const [updateAlbum, { loading }] = useMutation<
    Types.UpdateAlbumMutation,
    Types.UpdateAlbumMutationVariables
  >(operations.updateAlbum);

  const { data, loading: albumInfoLoading } = useQuery<
    Types.GetAlbumQuery,
    Types.GetAlbumQueryVariables
  >(operations.getAlbum, { variables: { id } });

  const { data: userData, loading: userInfoLoading } = useQuery<
    Types.GetUsersSelectQuery,
    Types.GetUsersSelectQueryVariables
  >(operations.getUsersSelect);

  const onFinish = (values: Types.Values) => {
    updateAlbum({
      variables: {
        input: {
          title: values.title,
          userId: values.user,
        },
        id,
      },
    });
    navigate(-1);
  };

  if (!userData || loading || userInfoLoading || albumInfoLoading) {
    return <Spinner />;
  }

  const options = userData.users?.data?.map((d) => (
    <Option key={d?.id}>{d?.username}</Option>
  ));

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 30 }}
      initialValues={{
        title: data?.album?.title,
        user: data?.album?.user?.id,
      }}
      onFinish={onFinish}
      autoComplete="off"
      className={styles.edit}
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

export default EditForm;
