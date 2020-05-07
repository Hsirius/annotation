import React from "react";
import { ProMenuExport } from "../../menu";
import { UnorderedListOutlined } from "@ant-design/icons";

const menu: ProMenuExport = {
  path: "/table",
  name: "table",
  icon: <UnorderedListOutlined />,
  routes: [
    {
      name: "tableList",
      path: "/table/list",
      exact: true,
      component: React.lazy(() => import("./table")),
    },
  ],
};

export default menu;
