import './review-item.scss';
import star from '../../images/star.png';

function ReviewItem(props) {
  return (
    <div className="review-item">
      <div className="user-info">
        <div className="user-img">
          <img src={props.userImg} alt="user-img" />
        </div>
        <div className="user-name">
          <strong>{props.userName}</strong>
          <p>{props.date}</p>
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
          <p>{props.comment}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
