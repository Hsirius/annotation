import React from "react";
import { useLocalStore, useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { PageHeaderWrapper } from "@ant-design/pro-layout";
import { Card } from "antd";

const About = () => {
  const store = useLocalStore(() => ({
    msg: "about",
  }));
  return useObserver(() => (
    <PageHeaderWrapper>
      <Card>
        <p>{store.msg}</p>
        <Link to={"/about/list"}>to list</Link>
      </Card>
    </PageHeaderWrapper>
  ));
};
export default About;
