import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Button, Space, Table } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Spinner, DeleteModal } from "../../components";
import { operations, Types } from "./duck";

const { Column } = Table;

interface Data {
  id: string;
  key: string;
  numPhotos: number;
  title: string;
  username: string;
}

const AlbumsPage: React.FC = () => {
  const navigation = useNavigate();
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      page: "1",
      size: "10",
    });
  }, [setSearchParams]);

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
          onChange(page, pageSize) {
            setSearchParams({
              page: page.toString(),
              size: pageSize.toString(),
            });
          },
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
          render={(_: any, data: Data) => (
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
      <Button type="primary" onClick={() => navigation("/albums/create")}>
        Create
      </Button>
    </>
  );
};

export default AlbumsPage;
