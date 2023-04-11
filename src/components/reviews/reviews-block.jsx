import './reviews-block.scss';
import profileImg from '../../images/img-logo.jpg';
import star from '../../images/star.png';
import ReviewItem from './review-item';
function ReviewsBlock() {
  return (
    <div className="reviews-block">
      <div className="profile-block">
        <div className="profile">
          <div className="profile-img">
            <img src={profileImg} alt="profile-img" />
          </div>
          <div className="profile-details">
            <strong>One Pound Sweets</strong>
            <span>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </span>
            <div>
              <a href="http://">12382 Trustindex reviews</a>
            </div>
          </div>
        </div>
        <div className="profile-links">
          <a href="http://">See all reviews</a>
          <a href="http://">Write a review</a>
        </div>
      </div>
      <div className="slider">
        <ReviewItem />
      </div>
    </div>
  );
}

export default ReviewsBlock;
