/* eslint-disable no-console */
import React from "react";
import { Typography } from "antd";
import { CreateAlbumsForm } from "app/components";

const { Title } = Typography;

const CreateAlbumsPage: React.FC = () => {
  return (
    <>
      <Title level={1}>Create</Title>
      <CreateAlbumsForm />
    </>
  );
};

export default CreateAlbumsPage;
