import { TitleBlock } from '../components/title/title-block';
import { RedInfo } from '../components/delivery/red-info';
import { SortProducts } from '../components/sorting/sort-products';
import ReviewsBlock from '../components/reviews/reviews-block';

export const ShopByBrand = () => {
  return (
    <div>
      <TitleBlock title="Shop by Brand" />
      <RedInfo />
      <SortProducts />
      <ReviewsBlock />
    </div>
  );
};
