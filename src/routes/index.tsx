import React, { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { Spin } from 'antd';

export interface RouteType {
  path: string;
  element: React.ReactNode;
  children?: Array<RouteType>;
}

const LayoutPage = lazy(() => import('@page/App'));

const routes: Array<RouteType> = [
  {
    path: '/*',
    element: (
      <Suspense fallback={<Spin />}>
        <LayoutPage />
      </Suspense>
    )
  }
];

const WrappedRoutes = () => {
  return useRoutes(routes);
};

export default WrappedRoutes;
