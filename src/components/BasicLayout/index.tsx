import React from "react";
import { withRouter, Link } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import ProLayout from "@ant-design/pro-layout";
import { hot } from "react-hot-loader/root";
import RightContent from "./RightContent";
import menu from "../../menu";

const BasicLayout = withRouter(({ location, children }) => {
  return useObserver(() => (
    <ProLayout
      menuItemRender={(props) => (
        // @ts-ignore
        <Link to={props.path}>
          {props.icon && props.icon}
          <span>{props.name}</span>
        </Link>
      )}
      route={{ routes: menu }}
      location={location}
      title="标注平台"
      footerRender={false}
      rightContentRender={() => <RightContent />}
    >
      {children}
    </ProLayout>
  ));
});

export default hot(BasicLayout);
