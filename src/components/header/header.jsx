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
          <a href="./#">
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
          <li>Shop All Sweets</li>
          <li>Shop By Brand</li>
          <li>Sweets By Color</li>
          <li>Sweets By Flavour</li>
          <li>Sweets By Occasion</li>
          <li>Shop Bicuits</li>
          <li>Shop Crisps</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
