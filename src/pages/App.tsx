import React, { lazy, Suspense } from 'react';
import { Layout, Menu, Spin } from 'antd';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import { PieChartOutlined, PushpinOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

const HomePage = lazy(() => import('@page/Home/index'));
const TaskPage = lazy(() => import('@page/Task/index'));

type MenuRouterItem = {
  label: string;
  key: string;
  element: React.ReactNode;
  icon?: React.ReactNode;
  children?: Array<MenuRouterItem>;
};

const menuRouterList: Array<MenuRouterItem> = [
  {
    label: '首页',
    key: '/home',
    element: <HomePage />,
    icon: <PieChartOutlined rev={undefined} />
  },
  {
    label: '个人办公',
    key: '/task',
    element: <TaskPage />,
    icon: <PushpinOutlined rev={undefined} />
  }
];

const LayoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation(); // 获取当前url

  const menuOnClick = (e: { key: string }) => {
    navigate(e.key); // 实现跳转
  };

  const menuList = menuRouterList.map(item => ({
    label: item.label,
    key: item.key,
    icon: item.icon,
    children: item.children
  }));

  const routesList = useRoutes(
    menuRouterList.map(item => ({
      path: item.key,
      element: <Suspense fallback={<Spin />}>{item.element}</Suspense>
    }))
  );

  const appStyle = {
    width: '100vw',
    height: '100vh'
  };

  return (
    <div className="App" style={appStyle}>
      <Layout style={{ height: '100%' }}>
        <Sider>
          <div style={{ height: 90 }} />
          <Menu
            theme="dark"
            mode="inline"
            items={menuList}
            selectedKeys={[pathname]}
            onClick={menuOnClick}
          />
        </Sider>
        <Layout style={{ height: '100%' }}>
          <Content style={{ height: '100%' }}>{routesList}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutPage;
