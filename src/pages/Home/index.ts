import React from "react";
import { ProMenuExport } from "../../menu";

const menu: ProMenuExport = [
  {
    name: "root",
    path: "/",
    component: React.lazy(() => import("./home")),
  },
  {
    name: "home",
    path: "/home",
    component: React.lazy(() => import("./home")),
  },
];

export default menu;
