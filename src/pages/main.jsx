import Banner from '../components/banner/banner';
import { CategoriesBlock } from '../components/categories/categories-block';
import ProductsBlock from '../components/products/products-block';
import ReviewsBlock from '../components/reviews/reviews-block';

export const Main = () => {
  return (
    <div>
      <Banner />
      <ReviewsBlock />
      <CategoriesBlock />
      <ProductsBlock />
    </div>
  );
};
