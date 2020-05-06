import { withRouter } from "react-router-dom";
import React from "react";
import { Menu, Dropdown } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useObserver } from "mobx-react-lite";

const RightContent = withRouter(({ history }) => {
  const userDropDown = (
    <Menu>
      <Menu.Item key="userInfo">
        <SettingOutlined />
      </Menu.Item>
      <Menu.Item key="userInfo"></Menu.Item>
    </Menu>
  );
  return useObserver(() => (
    <div>
      <Dropdown overlay={userDropDown}>
        <span>test</span>
      </Dropdown>
    </div>
  ));
});

export default RightContent;
