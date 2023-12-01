import Banner from '../components/banner/banner';
import CategoriesBlock from '../components/categories/categories-block';
import ProductsBlock from '../components/products/products-block';
import ReviewsBlock from '../components/reviews/reviews-block';
import { TitleBlock } from '../components/title/title-block';
export const Main = () => {
  return (
    <div>
      <Banner />
      <ReviewsBlock />
      <CategoriesBlock />
      <TitleBlock title="Shop Easter Sweets" />
      <ProductsBlock />
    </div>
  );
};
