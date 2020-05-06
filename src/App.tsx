import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login";
import { observer } from "mobx-react-lite";
import { Routes } from "./menu";
import BasicLayout from "./components/BasicLayout";

export const history = createBrowserHistory();

const Main = observer(() => {
  let loginStatus = sessionStorage.getItem("loginStatus") === "true";
  return loginStatus ? (
    <BasicLayout>
      <Routes />
    </BasicLayout>
  ) : (
    <Redirect to="/login" />
  );
});

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/" render={() => <Main />}></Route>
      </Switch>
    </Router>
  );
};

export default App;
