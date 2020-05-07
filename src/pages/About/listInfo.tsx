import { useObserver, useLocalStore } from "mobx-react-lite";
import React, { FC, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getNews } from "../../service/test/test";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { Card } from "antd";

const ListInfo: FC<RouteComponentProps<{ listId: string }>> = ({
  history,
  match: {
    params: { listId },
  },
}) => {
  const store = useLocalStore(() => ({
    getData: () => {
      getNews().then((res) => {
        console.log(res);
      });
    },
  }));
  useEffect(() => {
    store.getData();
  }, []);
  return useObserver(() => (
    <PageHeaderWrapper>
      <Card>{listId}</Card>
    </PageHeaderWrapper>
  ));
};
export default ListInfo;
