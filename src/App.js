import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Main } from './components/pages/main';
import { ShopAllSweets } from './components/pages/shop_all_sweets';
import { ShopBiscuits } from './components/pages/shop_biscuits';
import { ShopByBrand } from './components/pages/shop_by_brand';
import { ShopCrisps } from './components/pages/shop_crisps';
import { SweetsByColor } from './components/pages/sweets_by_color';
import { SweetsByFlavour } from './components/pages/sweets_by_flavour';
import { SweetsByOccasion } from './components/pages/sweets_by_occasion';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/sweet-shop-app" element={<Main />} />
          <Route path="/sweet-shop-app/shop_all_sweets" element={<ShopAllSweets />} />
          <Route path="/sweet-shop-app/shop_biscuits" element={<ShopBiscuits />} />
          <Route path="/sweet-shop-app/shop_by_brand" element={<ShopByBrand />} />
          <Route path="/sweet-shop-app/shop_crisps" element={<ShopCrisps />} />
          <Route path="/sweet-shop-app/sweets_by_color" element={<SweetsByColor />} />
          <Route path="/sweet-shop-app/sweets_by_flavour" element={<SweetsByFlavour />} />
          <Route path="/sweet-shop-app/sweets_by_occasion" element={<SweetsByOccasion />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
