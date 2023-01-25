import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Users from './features/users/Users';

function App() {
  return (
    <div className="App">
      <header className='text-center'>
        {/* <Counter /> */}
        Redux Toolkit Demo
        <hr />
      </header>

      <main className='container'>
        <Users />
      </main>

      <footer className='text-center'>
        <hr/>
        <p>Copyright 2023 | Arun</p>
      </footer>
    </div>
  );
}

export default App;
