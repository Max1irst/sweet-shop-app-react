import './review-item.scss';
import user from '../../images/user3.png';
import star from '../../images/star.png';

function ReviewItem() {
  return (
    <div className="review-item">
      <div className="user-info">
        <div>
          <img src={user} alt="user-img" />
        </div>
        <div>
          <strong>Kev Grant</strong>
          <p>April 2, 2023</p>
        </div>
      </div>
      <div className="review">
        <span>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </span>
        <div>
          <p>
            Ordered and delivered within 72 hours Brilliant service, will definitely be using them
            again for some nostalgic sweets.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
