import { NavLink } from 'react-router-dom';

import './header.scss';
import logo from '../../assets/images/logo.webp';
import searchIcon from '../../assets/images/search-icon.png';
import helpIcon from '../../assets/images/help-icon.png';
import profileIcon from '../../assets/images/profile-icon.png';
import basketIcon from '../../assets/images/basket-icon.png';
function Header() {
  return (
    <div>
      <div className="header">
        <div className="search">
          <input placeholder="Search for your favorite sweets" />
          <button className="search-btn">
            <img src={searchIcon} alt="search"></img>
          </button>
        </div>
        <NavLink to="/sweet-shop-app">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="menu">
          <NavLink to="./help">
            <img src={helpIcon} alt="help"></img>
            Help
          </NavLink>
          <NavLink to="./account">
            <img src={profileIcon} alt="help"></img>
            Account
          </NavLink>
          <NavLink to="./basket">
            <img src={basketIcon} alt="help"></img>
            Basket
          </NavLink>
        </div>
      </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/shop_all_sweets" className={({ isActive }) => (isActive ? 'active' : '')}>
              Shop All Sweets
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop_by_brand" className={({ isActive }) => (isActive ? 'active' : '')}>
              Shop By Brand
            </NavLink>
          </li>
          <li>
            <NavLink to="/sweets_by_color" className={({ isActive }) => (isActive ? 'active' : '')}>
              Sweets By Color
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sweets_by_flavour"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Sweets By Flavour
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sweets_by_occasion"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Sweets By Occasion
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop_biscuits" className={({ isActive }) => (isActive ? 'active' : '')}>
              Shop Biscuits
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop_crisps" className={({ isActive }) => (isActive ? 'active' : '')}>
              Shop Crisps
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
