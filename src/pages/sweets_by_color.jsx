import { TitleBlock } from '../components/title/title-block';
import { RedInfo } from '../components/delivery/red-info';
import { SortProducts } from '../components/sorting/sort-products';
import ReviewsBlock from '../components/reviews/reviews-block';

export const SweetsByColor = () => {
  return (
    <div>
      <TitleBlock title="Sweets by Color" />
      <RedInfo />
      <SortProducts />
      <ReviewsBlock />
    </div>
  );
};
