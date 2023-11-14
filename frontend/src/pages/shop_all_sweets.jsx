import { TitleBlock } from '../components/title/title-block';
import { RedInfo } from '../components/delivery/red-info';
import { SortProducts } from '../components/sorting/sort-products';
import ReviewsBlock from '../components/reviews/reviews-block';

export const ShopAllSweets = () => {
  return (
    <div>
      <TitleBlock title="Shop All Sweets" />
      <RedInfo />
      <SortProducts />
      <ReviewsBlock />
    </div>
  );
};
