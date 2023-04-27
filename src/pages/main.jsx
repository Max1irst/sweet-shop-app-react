import Banner from '../components/banner/banner';
import ReviewsBlock from '../components/reviews/reviews-block';
import ProductsBlock from '../components/products/products-block';

export const Main = () => {
  return (
    <div>
      <Banner />
      <ProductsBlock />
      <ReviewsBlock />
    </div>
  );
};
