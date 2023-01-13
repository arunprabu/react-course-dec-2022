// 3 parts
/*
  1. import section
  2. component definition 
  3. export 
*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import StyledComponentsDemoPage from './pages/StyledComponentsDemoPage/StyledComponentsDemoPage';
import HocDemoPage from './pages/HocDemoPage/HocDemoPage';
import ErrorBoundary from './containers/shared/ErrorBoundary/ErrorBoundary';
import InstaFeedPage from './pages/InstaFeedPage/InstaFeedPage';
import HooksDemoPage from './pages/HooksDemoPage/HooksDemoPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import { PageContext } from './contexts/PageContext';
import { CartContext } from './contexts/CartContext';
import { useReducer } from 'react';
import cartReducer from './reducers/cartReducer';

// comp defn
function App() {

  const userStatus = {
    isLoggedIn: true,
    lastLogin: '11/Jan/2023'
  };

  const [cartState, cartDispatch] = useReducer(cartReducer);
  console.log(cartState);

  const cartData = {
    cartState: cartState,
    cartDispatch: cartDispatch
  };

  // must return JSX
  return (
    // Step 2 of CartContext
    <CartContext.Provider value={cartData}>
      <BrowserRouter>
        <div>
          <Header></Header>
          <main className="container mt-5 pt-3">
            <p>success!</p>
            <ErrorBoundary>
              {/* Step 2 of Context API */}
              <PageContext.Provider value={userStatus}>
                <Routes>
                  {/* URL configuration */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact-us" element={<ContactUsPage />} />
                  <Route path="/styled-comp-demo" element={<StyledComponentsDemoPage />} />
                  <Route path="/hoc-demo" element={<HocDemoPage />} />
                  <Route path="/insta-feed" element={<InstaFeedPage />} />
                  <Route path="/hooks-demo" element={<HooksDemoPage />} />
                  <Route path="/products" element={<ProductsPage />} />
                </Routes>
              </PageContext.Provider>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
