import React from "react";
import { useLocalStore, useObserver } from "mobx-react-lite";
import { PageHeaderWrapper } from "@ant-design/pro-layout";

const Home = () => {
  const store = useLocalStore(() => ({
    msg: "首页",
  }));
  return useObserver(() => <PageHeaderWrapper>{store.msg}</PageHeaderWrapper>);
};
export default Home;
