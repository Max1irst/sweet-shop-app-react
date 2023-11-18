import './banner.scss';

function Banner() {
  return (
    <div className="banner">
      <h1>Retro Sweet Shop</h1>
      <p>
        <strong>Over 950 products in store with super fast home delivery available.</strong>
      </p>
      <p>
        <strong>
          Shop of our range of retro sweets, big sharing bag crisps, family favourite biscuits and
          top branded 500ml fizzy and juice drinks.
        </strong>
      </p>
      <div className="order-block">
        <a href="./#">Shop All Treats</a>
      </div>
    </div>
  );
}

export default Banner;
