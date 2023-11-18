import './sort-products.scss';

export const SortProducts = () => {
  return (
    <div className="sorting">
      <form>
        <select name="orderby" id="orderby">
          <option value="popularity">Sort by best selling</option>
          <option value="date">Sort by newest</option>
          <option value="price">Sort by price: low to high</option>
          <option value="price-desc">Sort by price: high to low</option>
        </select>
      </form>
    </div>
  );
};
