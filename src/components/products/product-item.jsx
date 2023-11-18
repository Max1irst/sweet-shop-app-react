import './product-item.scss';
import star from '../../assets/images/star.png';
function ProductItem(props) {
  return (
    <div className="product-item">
      <a href="./#">
        <img src={props.productImg} alt="product" />
        <h2>{props.productName}</h2>
        <span>$ {props.productPrice}</span>
      </a>
      <div className="rating">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <br />
        <span>({props.reviews} reviews)</span>
      </div>
      <a href="./#" className="product-btn">
        Add to basket
      </a>
      <p>{props.inStock} in stock</p>
    </div>
  );
}

export default ProductItem;
