// 3 parts 
/*
  1. import section
  2. component definition 
  3. export 
*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";

// comp defn 
function App() {
  // must return JSX
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <main className="container mt-5 pt-3">
          <Routes>
            {/* URL configuration */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
