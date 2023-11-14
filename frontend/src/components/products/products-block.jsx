import React from 'react';
import './products-block.scss';
import ProductItem from './product-item';

function ProductsBlock() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://6465e4429c09d77a62f6e60b.mockapi.io/products')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="products-block">
      <h3>Shop Easter Sweets</h3>
      <div className="products-list">
        {items.map((obj) => (
          <ProductItem key={obj.productImg} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default ProductsBlock;
