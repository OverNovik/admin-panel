import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { AlbumsTable } from "app/components";

const AlbumsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button type="primary" onClick={() => navigate("/albums/create")}>
        Create
      </Button>
      <AlbumsTable />
    </>
  );
};

export default AlbumsPage;
