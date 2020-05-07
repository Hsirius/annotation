import React from "react";
import { ProMenuExport } from "../../menu";

const menu: ProMenuExport = {
  path: "/table",
  name: "table",
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
