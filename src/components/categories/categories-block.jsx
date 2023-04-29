import { CategoryItem } from './category-item';
import sweets from '../../images/sweets.jpg';
import biscuits from '../../images/biscuits.jpg';
import drinks from '../../images/drinks.jpg';
import crisps from '../../images/crisps.webp';
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
