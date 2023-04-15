import { NavLink } from 'react-router-dom';

import './header.scss';
import logo from '../../images/logo.webp';
import searchIcon from '../../images/search-icon.png';
import helpIcon from '../../images/help-icon.png';
import profileIcon from '../../images/profile-icon.png';
import basketIcon from '../../images/basket-icon.png';
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
        <a href="./#">
          <img src={logo} alt="logo" />
        </a>
        <div className="menu">
          <a href="./contacts">
            <img src={helpIcon} alt="help"></img>
            Help
          </a>
          <a href="./#">
            <img src={profileIcon} alt="help"></img>
            Account
          </a>
          <a href="./#">
            <img src={basketIcon} alt="help"></img>
            Basket
          </a>
        </div>
      </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Shop All Sweets
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>
              Shop By Brand
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>
              Sweets By Color
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>
              Sweets By Flavour
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>
              Sweets By Occasion
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>
              Shop Bicuits
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>
              Shop Crisps
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
