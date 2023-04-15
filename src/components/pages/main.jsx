import Banner from '../banner/banner';
import ReviewsBlock from '../reviews/reviews-block';
import ProductsBlock from '../products/products-block';

export const Main = () => {
  return (
    <div>
      <Banner />
      <ProductsBlock />
      <ReviewsBlock />
    </div>
  );
};
