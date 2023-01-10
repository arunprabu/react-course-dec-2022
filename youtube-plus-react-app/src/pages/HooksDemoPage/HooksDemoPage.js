import React from 'react';
import Blog from './Blog/Blog';
import MyAccount from './MyAccount/MyAccount';
import Todos from './Todos/Todos';

const HooksDemoPage = () => {
  return (
    <div>
      <h1>HooksDemoPage</h1>
      <h2>useState() - Hook Demo</h2>
      <MyAccount />

      <hr />
      <h2>useEffect() - Hook Demo</h2>
      <Blog />

      <hr />
      <h2>useRef() and useReducer() - Hooks Demo</h2>
      <Todos />
    </div>
  );
};

export default HooksDemoPage;
