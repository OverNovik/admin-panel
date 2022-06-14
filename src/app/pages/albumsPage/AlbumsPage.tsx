import React from "react";
import { useQuery } from "@apollo/client";
import { Button, Space, Table } from "antd";
import { Spinner } from "app/components";
import { operations, Types } from "./duck";

const { Column } = Table;

const AlbumsPage: React.FC = () => {
  const { data, loading } = useQuery<
    Types.GetAlbumsQuery,
    Types.GetAlbumsQueryVariables
  >(operations.getAlbums);

  const dataItems = data?.albums?.data?.map((item) => {
    return {
      id: item?.id,
      title: item?.title,
      username: item?.user?.name,
      numPhotos: item?.photos?.data?.length,
    };
  });

  if (!data || loading) {
    return <Spinner />;
  }

  return (
    <Table
      size="small"
      dataSource={dataItems}
      pagination={{
        pageSizeOptions: [1, 5, 10],
      }}
    >
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="Title" dataIndex="title" key="title" />
      <Column title="User name" dataIndex="username" key="username" />
      <Column title="Number of photos" dataIndex="numPhotos" key="numPhotos" />
      <Column
        key="action"
        render={() => (
          <Space size="small">
            <Button type="link">Show</Button>
            <Button type="link">Edit</Button>
            <Button type="link">Delete</Button>
          </Space>
        )}
      />
    </Table>
  );
};

export default AlbumsPage;
