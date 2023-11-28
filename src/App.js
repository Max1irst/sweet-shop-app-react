import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Main } from './pages/main';
import { ShopAllSweets } from './pages/shop_all_sweets';
import { ShopBiscuits } from './pages/shop_biscuits';
import { ShopByBrand } from './pages/shop_by_brand';
import { ShopCrisps } from './pages/shop_crisps';
import { SweetsByColor } from './pages/sweets_by_color';
import { SweetsByFlavour } from './pages/sweets_by_flavour';
import { SweetsByOccasion } from './pages/sweets_by_occasion';
import { GreenInfo } from './components/delivery/green-info';
import { NotFoundPage } from './pages/notFound';
import { Cart } from './pages/cart';

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <GreenInfo />
        <Header />
        <Routes>
          <Route path="/sweet-shop-app" element={<Main />} />
          <Route path="/shop_all_sweets" element={<ShopAllSweets />} />
          <Route path="/shop_biscuits" element={<ShopBiscuits />} />
          <Route path="/shop_by_brand" element={<ShopByBrand />} />
          <Route path="/shop_crisps" element={<ShopCrisps />} />
          <Route path="/sweets_by_color" element={<SweetsByColor />} />
          <Route path="/sweets_by_flavour" element={<SweetsByFlavour />} />
          <Route path="/sweets_by_occasion" element={<SweetsByOccasion />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <GreenInfo />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
