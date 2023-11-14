import { TitleBlock } from '../components/title/title-block';
import { RedInfo } from '../components/delivery/red-info';
import { SortProducts } from '../components/sorting/sort-products';
import ReviewsBlock from '../components/reviews/reviews-block';

export const SweetsByFlavour = () => {
  return (
    <div>
      <TitleBlock title="Sweets By Flavour" />
      <RedInfo />
      <SortProducts />
      <ReviewsBlock />
    </div>
  );
};
