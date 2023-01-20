// 3 parts
/*
  1. import section
  2. component definition 
  3. export 
*/
import { BrowserRouter } from 'react-router-dom';
import { useReducer } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './containers/shared/ErrorBoundary/ErrorBoundary';
import { PageContext } from './contexts/PageContext';
import { CartContext } from './contexts/CartContext';
import cartReducer from './reducers/cartReducer';
import { appRoutes} from './routes/appRoutes';
import { AuthContext } from './contexts/AuthContext';

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

  const auth = {
    isLoggedIn: true,
    username: 'johnw',
    fullName: 'John Williams',
    lastLogin: '20/Jan/2023'
  };

  // must return JSX
  return (
    <AuthContext.Provider value={auth}>
      {/* Step 2 of CartContext */}
      <CartContext.Provider value={cartData}>
        <BrowserRouter>
          <div>
            <Header></Header>
            <main className="container mt-5 pt-3">
              <ErrorBoundary>
                {/* Step 2 of Context API */}
                <PageContext.Provider value={userStatus}>{appRoutes}</PageContext.Provider>
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
