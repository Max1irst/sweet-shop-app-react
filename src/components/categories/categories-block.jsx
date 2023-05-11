import { CategoryItem } from './category-item';
import sweets from '../../assets/images/sweets.jpg';
import biscuits from '../../assets/images/biscuits.jpg';
import drinks from '../../assets/images/drinks.jpg';
import crisps from '../../assets/images/crisps.webp';
import './categories.scss';

export const CategoriesBlock = () => {
  return (
    <div className="categories-block">
      <CategoryItem link="/sweet-shop-app" img={sweets} category="Sweets" />
      <CategoryItem link="/sweet-shop-app" img={biscuits} category="Biscuits" />
      <CategoryItem link="/sweet-shop-app" img={drinks} category="Drinks" />
      <CategoryItem link="/sweet-shop-app" img={crisps} category="Crisps" />
    </div>
  );
};
