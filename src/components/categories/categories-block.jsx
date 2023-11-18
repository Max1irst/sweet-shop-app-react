import CategoryItem from './category-item';
import './categories.scss';
import categories from '../../assets/data/categories.json';

function CategoriesBlock() {
  return (
    <div className="categories-block">
      {categories.map((obj) => (
        <CategoryItem key={obj.categoryImg} {...obj} />
      ))}
    </div>
  );
}

export default CategoriesBlock;
