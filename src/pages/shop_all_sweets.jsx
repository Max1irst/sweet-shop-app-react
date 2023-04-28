import { TitleBlock } from '../components/title/title-block';
import { DeliveryInfo } from '../components/delivery/delivery-info';
import { SortProducts } from '../components/sorting/sort-products';

export const ShopAllSweets = () => {
  return (
    <div>
      <TitleBlock title="Shop All Sweets" />
      <DeliveryInfo />
      <SortProducts />
    </div>
  );
};
