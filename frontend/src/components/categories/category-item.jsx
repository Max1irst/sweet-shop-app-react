import './categories.scss';

function CategoryItem({ categoryLink, categoryImg, categoryName }) {
  return (
    <div className="category-item">
      <a href={categoryLink}>
        <img src={categoryImg} alt="category-img" />
      </a>
      <a className="category-btn" href={categoryLink}>
        <span>Shop {categoryName}</span>
      </a>
    </div>
  );
}
export default CategoryItem;
