import './products-block.scss';
import ProductItem from './product-item';
import product1 from '../../assets/images/product1.jpg';

function ProductsBlock() {
  return (
    <div className="products-block">
      <h3>Shop Easter Sweets</h3>
      <div className="products-list">
        <ProductItem
          productImg={product1}
          productName="Jacks Milk Chocolate Mini Eggs 87g"
          productPrice="0.89"
          reviews="2"
          inStock="77"
        />
        <ProductItem
          productImg={product1}
          productName="Bonds Bunny Jelly Beans Tube 80g"
          productPrice="1.00"
          reviews="2"
          inStock="2"
        />
        <ProductItem
          productImg={product1}
          productName="Bonds Sherbet Carrots 8 Pack"
          productPrice="0.75"
          reviews="0"
          inStock="117"
        />
        <ProductItem
          productImg={product1}
          productName="Haribo Jelly Bunnies 160g"
          productPrice="1.00"
          reviews="1"
          inStock="90"
        />
      </div>
    </div>
  );
}

export default ProductsBlock;
