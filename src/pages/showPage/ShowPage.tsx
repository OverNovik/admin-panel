import React from "react";
import { useQuery } from "@apollo/client";
import { Button, Image, Space, Table, Tabs, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "../../components";
import { operations, Types } from "./duck";
import styles from "./ShowPage.module.css";

const { TabPane } = Tabs;
const { Text } = Typography;
const { Column } = Table;

const ShowPage: React.FC = () => {
  const { id = "" } = useParams();
  const navigation = useNavigate();

  const { data, loading } = useQuery<
    Types.GetAlbumInfoQuery,
    Types.GetAlbumInfoQueryVariables
  >(operations.getAlbumInfo, {
    variables: {
      id,
    },
  });

  const { data: photos, loading: photosLoading } = useQuery<
    Types.GetPhotosInfoQuery,
    Types.GetPhotosInfoQueryVariables
  >(operations.getPhotosInfo, {
    variables: {
      id,
    },
  });

  const photoItem = photos?.album?.photos?.data?.map((item) => {
    return {
      id: item?.id,
      title: item?.title,
      preview: item?.thumbnailUrl,
      key: item?.id,
    };
  });

  if (!data || loading || !photos || photosLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Button type="primary" onClick={() => navigation(-1)}>
        Back
      </Button>
      <Tabs className={styles.tabs} defaultActiveKey="1" centered>
        <TabPane tab="Basic" key="1">
          <Text strong>Name: {data.album?.user?.name}</Text>
          <br />
          <Text strong>Username: {data.album?.user?.username}</Text>
        </TabPane>
        <TabPane tab="Photos" key="2">
          <Table
            size="large"
            dataSource={photoItem}
            pagination={false}
            scroll={{ y: 440 }}
          >
            <Column title="ID" dataIndex="id" key="id" />
            <Column title="Title" dataIndex="title" key="title" />
            <Column
              title="Preview"
              dataIndex="preview"
              key="preview"
              render={(dataIndex) => <Image width={50} src={dataIndex} />}
            />
            <Column
              title="Actions"
              dataIndex="actions"
              key="actions"
              // eslint-disable-next-line @typescript-eslint/no-shadow
              render={(_: any, data: any) => (
                <Space size="large">
                  <Button
                    size="large"
                    type="link"
                    onClick={() => navigation(`photos/${data.id}`)}
                  >
                    Show
                  </Button>
                </Space>
              )}
            />
          </Table>
        </TabPane>
      </Tabs>
    </>
  );
};

export default ShowPage;
