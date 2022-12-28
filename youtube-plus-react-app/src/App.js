// 3 parts 
/*
  1. import section
  2. component definition 
  3. export 
*/

import './App.css';
import Header from './components/Header/Header';

// comp defn 
function App() {
  // must return JSX
  return(
    <div>
      <Header></Header>
      <h1>Success</h1>
    </div>
  )
}

export default App;
