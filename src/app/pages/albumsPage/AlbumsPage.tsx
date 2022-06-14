import React from "react";
import { Button, Space, Table } from "antd";

const { Column } = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const AlbumsPage: React.FC = () => {
  return (
    <Table
      dataSource={data}
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "30"],
      }}
    >
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="Title" dataIndex="title" key="title" />
      <Column title="Username" dataIndex="username" key="username" />
      <Column
        title="Number of photos"
        dataIndex="number of photos"
        key="Number of photos"
      />
      <Column
        title="Action"
        key="action"
        render={() => (
          <Space size="middle">
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
