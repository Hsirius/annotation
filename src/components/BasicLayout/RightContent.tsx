import { withRouter } from "react-router-dom";
import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useObserver } from "mobx-react-lite";
import styles from "./rightContent.module.scss";

const RightContent = withRouter(({ history }) => {
  const userDropDown = (
    <Menu>
      <Menu.Item
        key="logout"
        onClick={() => {
          history.push("/login");
        }}
      >
        <LogoutOutlined />
        <span>退出登录</span>
      </Menu.Item>
    </Menu>
  );
  return useObserver(() => (
    <div className={styles.right}>
      <Dropdown overlay={userDropDown}>
        <span>
          <Avatar className={styles.avatar} alt="avatar">
            U
          </Avatar>
        </span>
      </Dropdown>
    </div>
  ));
});

export default RightContent;
