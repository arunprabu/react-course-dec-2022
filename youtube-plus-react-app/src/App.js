// 3 parts 
/*
  1. import section
  2. component definition 
  3. export 
*/

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';

// comp defn 
function App() {
  // must return JSX
  return (
    <div>
      <Header></Header>
      <main className="container mt-5 pt-3">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
