import './header.scss';
import logo from '../../images/logo.webp';
function Header() {
  return (
    <div>
      <div className="header">
        <div className="search">
          <input placeholder="Search for your favorite sweets" />
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <a href="www.google.com">Help</a>
          <a href="www.google.com">Account</a>
          <a href="www.google.com">Basket</a>
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
