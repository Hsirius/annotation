import React from "react";
import { useLocalStore, useObserver } from "mobx-react-lite";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { Card, Table, Tag, Space } from "antd";

const TablePage = () => {
  const store = useLocalStore(() => ({
    data: [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
    ],
  }));
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags: string[]) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: any) => (
        <Space size="middle">
          <a href="#">Invite {record.name}</a>
          <a href="#">Delete</a>
        </Space>
      ),
    },
  ];
  return useObserver(() => (
    <PageHeaderWrapper>
      <Card>
        <Table dataSource={store.data} columns={columns} />
      </Card>
    </PageHeaderWrapper>
  ));
};
export default TablePage;
