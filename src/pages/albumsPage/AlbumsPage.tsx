import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { AlbumsTable } from "../../components";

const AlbumsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <AlbumsTable />
      <Button type="primary" onClick={() => navigate("/albums/create")}>
        Create
      </Button>
    </>
  );
};

export default AlbumsPage;
