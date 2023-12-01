import './products-block.scss';
import ProductItem from './product-item';
import { useGetAllProductsQuery } from '../../features/productsAPI';

function ProductsBlock() {
  const { data, error, isLoading } = useGetAllProductsQuery()
  return (<div>
    {isLoading ? (<p>Loading...</p>)
      : error ? (<p>Products not exist</p>)
        : (
          <>{
            <div className="products-block">
              <div className="products-list">
                {data?.map(product => (
                  <ProductItem key={product.productImg} {...product} />
                ))}
              </div>
            </div>
          }
          </>)}
  </div>
  );
}

export default ProductsBlock;
