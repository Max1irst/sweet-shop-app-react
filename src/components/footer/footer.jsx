import './footer.scss';
import logoFooter from '../../assets/images/logo-footer.png';
function Footer() {
  return (
    <div>
      <div className="footer">
        <div>
          <img src={logoFooter} alt="logo-footer" />
          <p>Part of The Traditional Candy Company Group</p>
        </div>
        <div>
          <h3>Site Links</h3>
          <div>
            <ul>
              <li>
                <a href="./#">Help & Support</a>
              </li>
              <li>
                <a href="./#">Delivery information</a>
              </li>
              <li>
                <a href="./#">My Account</a>
              </li>
              <li>
                <a href="./#">Privacy Policy</a>
              </li>
              <li>
                <a href="./#">Refund Policies</a>
              </li>
              <li>
                <a href="./#">Terms of Business</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Shop By Type</h3>
          <div>
            <ul>
              <li>
                <a href="./#">Dairy Free Sweets</a>
              </li>
              <li>
                <a href="./#">Gluten Free Sweets</a>
              </li>
              <li>
                <a href="./#">Halal Sweets</a>
              </li>
              <li>
                <a href="./#">Sugar Free Sweets</a>
              </li>
              <li>
                <a href="./#">Vegan Sweets</a>
              </li>
              <li>
                <a href="./#">Vegetarian Sweets</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Sweet Categories</h3>
          <div>
            <ul>
              <li>
                <a href="./#">Chew Bars</a>
              </li>
              <li>
                <a href="./#">Chocolate Sweets</a>
              </li>
              <li>
                <a href="./#">Fizzy Sweets</a>
              </li>
              <li>
                <a href="./#">Jelly Sweets</a>
              </li>
              <li>
                <a href="./#">Retro Sweets</a>
              </li>
              <li>
                <a href="./#">Sweet Tubs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div>
          <p>© The Traditional Candy Company Ltd Trading as One Pound Sweets</p>
        </div>
        <div>
          <p>
            Trading Address: Unit 5, Federation Road, Stoke-on-Trent, ST6 4HU | Company Number:
            11193657 | Vat Number: 322252837
          </p>
        </div>
        <div>
          <p>
            <a href="./#">Bargain Biscuits </a> | <a href="./#"> One Pound Sweets </a> |
            <a href="./#"> One Pound Crisps </a> | <a href="./#"> Pop Supermarket </a> |
            <a href="./#"> Bunny Superstore </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
