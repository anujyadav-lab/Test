import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCards from './components/Products';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
              <Header/>

      <Routes>
        <Route exact path="/" element={<ProductCards />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>

  );
}

export default App;