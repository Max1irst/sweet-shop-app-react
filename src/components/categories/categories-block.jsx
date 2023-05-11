import { CategoryItem } from './category-item';
import './categories.scss';
import categories from '../../assets/data/categories.json';

export const CategoriesBlock = () => {
  return (
    <div className="categories-block">
      {categories.map((obj) => (
        <CategoryItem {...obj} />
      ))}
    </div>
  );
};
