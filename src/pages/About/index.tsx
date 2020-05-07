import React from "react";
import { ProMenuExport } from "../../menu";

const menu: ProMenuExport = {
  path: "/about",
  name: "about",
  routes: [
    {
      name: "about",
      path: "/about",
      hideInMenu: true,
      exact: true,
      component: React.lazy(() => import("./about")),
    },
    {
      name: "aboutList",
      path: "/about/list",
      hideInMenu: true,
      exact: true,
      component: React.lazy(() => import("./list")),
    },
    {
      name: "listInfo",
      path: "/about/list/:listId",
      hideInMenu: true,
      exact: true,
      component: React.lazy(() => import("./listInfo")),
    },
  ],
};

export default menu;
