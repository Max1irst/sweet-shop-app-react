import './review-item.scss';
import star from '../../assets/images/star.png';

function ReviewItem({ userImg, userName, date, comment }) {
  return (
    <div className="review-item">
      <div className="user-info">
        <div className="user-img">
          <img src={userImg} alt="user-img" />
        </div>
        <div className="user-name">
          <strong>{userName}</strong>
          <p>{date}</p>
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
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
