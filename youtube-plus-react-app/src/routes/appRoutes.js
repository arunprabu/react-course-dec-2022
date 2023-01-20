// not a comp 

import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';

import HomePage from '../pages/HomePage/HomePage'; // not lazy loaded
import StyledComponentsDemoPage from '../pages/StyledComponentsDemoPage/StyledComponentsDemoPage'; // not lazy loaded

// the following components are lazy loaded
const AboutPage = React.lazy( () => import('../pages/AboutPage/AboutPage'));
const ContactUsPage = React.lazy(() => import('../pages/ContactUsPage/ContactUsPage'));
const HocDemoPage = React.lazy(() => import('../pages/HocDemoPage/HocDemoPage'));
const HooksDemoPage = React.lazy(() => import('../pages/HooksDemoPage/HooksDemoPage'));
const InstaFeedPage = React.lazy(() => import('../pages/InstaFeedPage/InstaFeedPage'));
const ProductsPage = React.lazy(() => import('../pages/ProductsPage/ProductsPage'));
const UnitTestingDemo = React.lazy(() => import('../pages/UnitTestingDemo/UnitTestingDemo'));

// organize routes 
export const appRoutes = (
  <Suspense fallback={<div className="spinner-border text-primary"></div>}>
    <Routes>
      {/* URL configuration */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/styled-comp-demo" element={<StyledComponentsDemoPage />} />
      <Route path="/insta-feed" element={<InstaFeedPage />} />
      <Route path="/hoc-demo" element={<HocDemoPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/hooks-demo" element={<HooksDemoPage />} />
      <Route path="/unit-testing-demo" element={<UnitTestingDemo />} />
    </Routes>
  </Suspense>
);
  
