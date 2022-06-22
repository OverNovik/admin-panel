import React from "react";
import { Typography } from "antd";
import { CreateAlbumsForm } from "../../components";

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
