import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Collections from './components/Collections';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import SellingProducts from './components/SellingProducts';
import SellingProducts_model from './components/SellingProducts_model';
import Themes from './components/Themes';
import SwagDekh from './components/ModelsComponents/SwagDekh';


const MultipleComponentsWithoutModel = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Collections />
      <Themes />
      <SellingProducts />
      <Offers />
      <Footer />
    </>
  );
};

function App() {
  const MultipleComponentsWithModel = () => {
    return (
      <>
        <Navbar />
        <SellingProducts_model />
      </>
    );
  };

  const SwagDekhh = () => {
    return (
      <>
        <Navbar />
        <SwagDekh />
      </>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MultipleComponentsWithoutModel />} />
        <Route path="/sellingProducts_model" element={<MultipleComponentsWithModel />} />
        <Route path="/SwagDekh" element={<SwagDekhh />} />
      </Routes>
    </Router>
  );
}

export default App;
