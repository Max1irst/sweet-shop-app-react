import './products-block.scss';
import ProductItem from './product-item';
import products from '../../assets/data/products.json';

function ProductsBlock() {
  return (
    <div className="products-block">
      <h3>Shop Easter Sweets</h3>
      <div className="products-list">
        {products.map((obj) => (
          <ProductItem {...obj} />
        ))}
      </div>
    </div>
  );
}

export default ProductsBlock;
