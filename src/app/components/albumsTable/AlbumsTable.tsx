import React from "react";
import { useQuery } from "@apollo/client";
import { Button, Space, Table } from "antd";
import { Spinner } from "app/components";
import { operations, Types } from "./duck";

const { Column } = Table;

const AlbumsTable: React.FC = () => {
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
      key: item?.id,
    };
  });

  if (!data || loading) {
    return <Spinner />;
  }

  return (
    <>
      <Table
        size="small"
        dataSource={dataItems}
        pagination={{
          pageSizeOptions: [10, 20, 50],
        }}
      >
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="User name" dataIndex="username" key="username" />
        <Column
          title="Number of photos"
          dataIndex="numPhotos"
          key="numPhotos"
        />
        <Column
          render={() => (
            <Space size="small">
              <Button size="small" type="link">
                Show
              </Button>
              <Button size="small" type="link">
                Edit
              </Button>
              <Button size="small" type="link">
                Delete
              </Button>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default AlbumsTable;
