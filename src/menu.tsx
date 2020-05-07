import React, { ComponentType, Suspense, FC } from "react";
//这里加root路径，不然报错
import { hot } from "react-hot-loader/root";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";

const menu: ProMenuType[] = [];

//@ts-ignore
const context = require.context("./pages", true, /\.\/[^/]+\/index\.tsx?$/);

export interface ProMenuType {
  // 页面组件懒加载
  component?:
    | React.LazyExoticComponent<() => JSX.Element>
    | React.ComponentType<RouteComponentProps>
    | React.LazyExoticComponent<React.FC<RouteComponentProps<any>>>;
  //菜单跳转路径，如果未设置routePath，则同时也是路由路径
  path: string;
  //路由路径，当路径包含变量时使用
  routePath?: string;
  //菜单项名称，影响页面标题和面包屑
  name: string;
  //菜单图标，ant design icon组件
  icon?: React.ReactNode;
  //子菜单
  routes?: ProMenuType[];
  //路径是否精确匹配
  exact?: boolean;
  //是否在菜单中隐藏该项
  hideInMenu?: boolean;
  //是否在面包屑中隐藏
  hideInBreadcrumb?: boolean;
}

context.keys().forEach((item: string) => {
  try {
    //正则会匹配所有的index组件，所以给home和login做下判断
    const menuItem = context(item).default;
    if (item === "./Home/index.tsx") {
      menu.unshift(menuItem);
    } else if (item === "./Login/index.tsx") {
      return false;
    } else if (menuItem instanceof Array) {
      menu.push(...menuItem);
    } else {
      menu.push(menuItem);
    }
  } catch (err) {
    console.log(err);
  }
});
const processMenuItem = (menuItem: ProMenuType) => {
  let Component: ComponentType<RouteComponentProps> = ({ children }) => (
    <>{children}</>
  );
  if (menuItem.component) {
    Component = menuItem.component;
  }

  //每个模块的index.tsx的根路由可能没有component组件，
  //这里加上redirect重定向到第一个子组件
  const children = menuItem.routes ? (
    <Switch>
      {menuItem.routes.map(processMenuItem)}
      <Redirect to={menuItem.routes[0].path} />
    </Switch>
  ) : undefined;
  return (
    <Route
      path={menuItem.routePath || menuItem.path}
      key={menuItem.routePath || menuItem.path}
      render={(props) => (
        <Suspense fallback={null}>
          <Component {...props}>{children}</Component>
        </Suspense>
      )}
      exact={menuItem.exact}
    />
  );
};

export type ProMenuExport = ProMenuType | ProMenuType[];

export const Routes = hot(() => {
  return <Switch>{menu.map(processMenuItem)}</Switch>;
});
export default menu;
