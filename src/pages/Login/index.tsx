import React, { useEffect } from "react";
import { useLocalStore, useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Login = () => {
  const store = useLocalStore(() => ({
    msg: "login",
    loginStatus: false,
    login: () => {
      sessionStorage.setItem("loginStatus", "true");
      store.loginStatus = true;
    },
    logout: () => {
      sessionStorage.removeItem("loginStatus");
      store.loginStatus = false;
    },
  }));
  useEffect(() => {
    store.loginStatus = sessionStorage.getItem("loginStatus") === "true";
  }, [store.loginStatus]);
  return useObserver(() => (
    <div>
      <h2>{store.msg}</h2>
      {store.loginStatus ? (
        <>
          <Link to={"/home"} className={styles.loginBtn}>
            to home
          </Link>
          <div onClick={store.logout} className={styles.loginBtn}>
            click to login out
          </div>
        </>
      ) : (
        <>
          <div onClick={store.login} className={styles.loginBtn}>
            click to login in
          </div>
        </>
      )}
    </div>
  ));
};
export default Login;
