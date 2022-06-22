import React from "react";
import { Typography } from "antd";
import { EditForm } from "../../components";

const { Title } = Typography;

const CreateAlbumsPage: React.FC = () => {
  return (
    <>
      <Title level={1}>Edit</Title>
      <EditForm />
    </>
  );
};

export default CreateAlbumsPage;
