import React, { lazy } from 'react';
import { Layout } from 'antd';

const HomePage = lazy(() => import('@page/Home/index'));

const LayoutPage: React.FC = () => {
  const appStyle = {
    width: '100vw',
    height: '100vh'
  };

  return (
    <div className="App" style={appStyle}>
      <Layout style={{ height: '100%' }}>
        <HomePage />
      </Layout>
    </div>
  );
};

export default LayoutPage;
