import React from "react";
import { ProMenuExport } from "../../menu";
import { HomeOutlined } from "@ant-design/icons";

const menu: ProMenuExport = {
  name: "home",
  path: "/",
  exact: true,
  component: React.lazy(() => import("./home")),
  icon: <HomeOutlined />,
};
export default menu;
