import { useDispatch } from 'react-redux';
import './product-item.scss';
import star from '../../assets/images/star.png';
import { addToCart } from '../../features/cartSlice';

function ProductItem(props) {
  const dispatch = useDispatch()
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
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
      <button onClick={() => { handleAddToCart(props) }} className="product-btn">
        Add to basket
      </button>
      <p>{props.inStock} in stock</p>
    </div>
  );
}

export default ProductItem;
