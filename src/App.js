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
import Marvel_Tshirt from './components/ModelsComponents/Marvel_Tshirt';
import Naruto_Tshirt from './components/ModelsComponents/Naruto_Tshirt';


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
  const Marvel_Tshirtt = () => {
    return (
      <>
        <Navbar />
        <Marvel_Tshirt/>
      </>
    );
  };
  const Naruto_Tshirtt = () => {
    return (
      <>
        <Navbar />
        <Naruto_Tshirt/>
      </>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MultipleComponentsWithoutModel />} />
        <Route path="/sellingProducts_model" element={<MultipleComponentsWithModel />} />
        <Route path="/SwagDekh" element={<SwagDekhh />} />
        <Route path="/Marvel_Tshirt" element={<Marvel_Tshirtt />} />
        <Route path="/Naruto_Tshirt" element={<Naruto_Tshirtt />} />
      </Routes>
    </Router>
  );
}

export default App;
