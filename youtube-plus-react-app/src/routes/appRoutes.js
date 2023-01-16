// not a comp 

import { Route, Routes } from 'react-router';
import AboutPage from '../pages/AboutPage/AboutPage';
import ContactUsPage from '../pages/ContactUsPage/ContactUsPage';
import HocDemoPage from '../pages/HocDemoPage/HocDemoPage';
import HomePage from '../pages/HomePage/HomePage';
import StyledComponents from '../pages/StyledComponentsDemoPage/StyledComponentsDemoPage';
import HooksDemoPage from '../pages/HooksDemoPage/HooksDemoPage';
import InstaFeedPage from '../pages/InstaFeedPage/InstaFeedPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import UnitTestingDemo from '../pages/UnitTestingDemo/UnitTestingDemo';

// organize routes 
export const appRoutes = (
  <Routes>
    {/* URL configuration */}
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact-us" element={<ContactUsPage />} />
    <Route path="/styled-comp-demo" element={<StyledComponents />} />
    <Route path="/insta-feed" element={<InstaFeedPage />} />
    <Route path="/hoc-demo" element={<HocDemoPage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/hooks-demo" element={<HooksDemoPage />} />
    <Route path="/unit-testing-demo" element={<UnitTestingDemo />} />
  </Routes>
);
  
