/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Button, Space, Table } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Spinner } from "components";
import { DeleteModal } from "./components";
import { operations, Types, utils } from "./duck";

const { Column } = Table;

const AlbumsPage: React.FC = () => {
  const navigation = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const paginationParams = utils.getPaginationParams(searchParams);

  useEffect(() => {
    setSearchParams({
      page: paginationParams.page.toString(),
      size: paginationParams.size.toString(),
    });
  }, []);

  const { data, loading } = useQuery<
    Types.GetAlbumsQuery,
    Types.GetAlbumsQueryVariables
  >(operations.getAlbums);

  const dataItems: Types.DataItems[] | undefined = data?.albums?.data?.map(
    (item) => {
      return {
        id: item?.id,
        title: item?.title,
        username: item?.user?.name,
        photos: item?.photos?.data,
        key: item?.id,
      };
    }
  );

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
          current: Number(paginationParams.page),
          pageSize: Number(paginationParams.size),
          pageSizeOptions: [10, 20, 50],
        }}
        scroll={{ y: 510 }}
      >
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="User name" dataIndex="username" key="username" />
        <Column
          title="Number of photos"
          key="currPhotos"
          render={(item) => item.photos.length}
        />
        <Column
          render={(item) => (
            <Space size="small">
              <Button
                size="small"
                type="link"
                onClick={() => navigation(`/albums/${item.id}`)}
              >
                Show
              </Button>
              <Button
                size="small"
                type="link"
                onClick={() => navigation(`/albums/${item.id}/edit`)}
              >
                Edit
              </Button>
              <DeleteModal id={item.id} />
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
