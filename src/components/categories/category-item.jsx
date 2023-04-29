import './categories.scss';

export const CategoryItem = (props) => {
  return (
    <div className="category-item">
      <a href={props.link}>
        <img src={props.img} alt="category-img" />
      </a>
      <a className="category-btn" href={props.link}>
        <span>Shop {props.category}</span>
      </a>
    </div>
  );
};
