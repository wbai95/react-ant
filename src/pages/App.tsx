import React from 'react';
// import { Button } from 'antd';
import HomePage from '@page/Home/index';

const App: React.FC = () => {
  const appStyle = {
    width: '100%',
    height: '100%'
  };

  return (
    <div className="App" style={appStyle}>
      <HomePage />
    </div>
  );
};

export default App;
