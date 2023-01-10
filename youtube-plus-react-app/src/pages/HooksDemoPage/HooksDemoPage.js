import React from 'react';
import Blog from './Blog/Blog';
import MyAccount from './MyAccount/MyAccount';

const HooksDemoPage = () => {
  return (
    <div>
      <h1>HooksDemoPage</h1>
      <h2>useState() - Hook Demo</h2>
      <MyAccount />

      <hr />
      <h2>useEffect() - Hook Demo</h2>
      <Blog />
    </div>
  );
};

export default HooksDemoPage;
