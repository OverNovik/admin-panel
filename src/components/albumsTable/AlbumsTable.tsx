import React from "react";
import { useQuery } from "@apollo/client";
import { Button, Space, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { Spinner } from "..";
import DeleteModal from "../deleteModal";
import { operations, Types } from "./duck";

const { Column } = Table;

const AlbumsTable: React.FC = () => {
  const navigation = useNavigate();

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
        scroll={{ y: 510 }}
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
          // eslint-disable-next-line @typescript-eslint/no-shadow
          render={(_: any, data: any) => (
            <Space size="small">
              <Button
                size="small"
                type="link"
                onClick={() => navigation(`/albums/${data.id}`)}
              >
                Show
              </Button>
              <Button
                size="small"
                type="link"
                onClick={() => navigation(`/albums/${data.id}/edit`)}
              >
                Edit
              </Button>
              <DeleteModal id={data.id} />
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default AlbumsTable;
