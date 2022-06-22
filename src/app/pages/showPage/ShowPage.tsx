import React from "react";
import { useQuery } from "@apollo/client";
import { Button, Space, Table, Tabs, Typography } from "antd";
import { useParams } from "react-router-dom";
import { Spinner } from "app/components";
import { operations, Types } from "./duck";
import styles from "./ShowPage.module.css";

const { TabPane } = Tabs;
const { Text } = Typography;
const { Column } = Table;

const ShowPage: React.FC = () => {
  const { id = "" } = useParams();

  const { data, loading } = useQuery<
    Types.GetAlbumInfoQuery,
    Types.GetAlbumInfoQueryVariables
  >(operations.getAlbumInfo, {
    variables: {
      id,
    },
  });

  if (!data || loading) {
    return <Spinner />;
  }

  return (
    <Tabs className={styles.tabs} defaultActiveKey="1" centered>
      <TabPane tab="Basic" key="1">
        <Text strong>Name: {data.album?.user?.name}</Text>
        <br />
        <Text strong>Username: {data.album?.user?.username}</Text>
      </TabPane>
      <TabPane tab="Photos" key="2">
        <Table
          className={styles.table}
          size="small"
          // dataSource={}
        >
          <Column title="ID" dataIndex="id" key="id" />
          <Column title="Title" dataIndex="title" key="title" />
          <Column title="Preview" dataIndex="preview" key="preview" />
          <Column
            title="Actions"
            dataIndex="actions"
            key="actions"
            // eslint-disable-next-line @typescript-eslint/no-shadow
            render={() => (
              <Space size="small">
                <Button size="small" type="link">
                  Show
                </Button>
              </Space>
            )}
          />
        </Table>
      </TabPane>
    </Tabs>
  );
};

export default ShowPage;
