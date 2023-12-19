import { NavLink } from 'react-router-dom';
import { FaEquals } from "react-icons/fa6";
import { useRef } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './header.scss';
import logo from '../../assets/images/logo.webp';
import basketIcon from '../../assets/images/basket-icon.png';
function Header() {
  const navRef = useRef()
  const navHeight = useRef()
  const huddleNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
    navHeight.current.classList.toggle('toggleHeight')
  }

  const { cartTotalQuantity } = useSelector(state => state.cart)
  return (
    <div>
      <div className="header">
        <div className='nav-btn'>
          <button onClick={() => huddleNavbar()}><FaEquals /></button>
        </div>
        <NavLink to="/sweet-shop-app">
          <img className='logo' src={logo} alt="logo" />
        </NavLink>
        <div className="menu">
          <NavLink to="/cart">
            <img id='cart' src={basketIcon} alt="cart" />
            <span className='counter'>{cartTotalQuantity}</span>
            <p>Basket</p>
          </NavLink>
        </div>
      </div>
      <div ref={navHeight} className="nav">
        <ul ref={navRef}>
          <li onClick={() => huddleNavbar()}>
            <NavLink to="/shop_all_sweets" className={({ isActive }) => (isActive ? 'active' : '')}>
              Shop All Sweets
            </NavLink>
          </li>
          <li onClick={() => huddleNavbar()}>
            <NavLink to="/shop_by_brand" className={({ isActive }) => (isActive ? 'active' : '')}>
              Shop By Brand
            </NavLink>
          </li>
          <li onClick={() => huddleNavbar()}>
            <NavLink to="/sweets_by_color" className={({ isActive }) => (isActive ? 'active' : '')}>
              Sweets By Color
            </NavLink>
          </li>
          <li onClick={() => huddleNavbar()}>
            <NavLink
              to="/sweets_by_flavour"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Sweets By Flavour
            </NavLink>
          </li>
          <li onClick={() => huddleNavbar()}>
            <NavLink
              to="/sweets_by_occasion"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Sweets By Occasion
            </NavLink>
          </li>
          <li onClick={() => huddleNavbar()}>
            <NavLink to="/shop_biscuits" className={({ isActive }) => (isActive ? 'active' : '')}>
              Shop Biscuits
            </NavLink>
          </li>
          <li onClick={() => huddleNavbar()}>
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
