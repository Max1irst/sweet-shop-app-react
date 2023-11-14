import React from 'react';
import './reviews-block.scss';
import profileImg from '../../assets/images/img-logo.jpg';
import star from '../../assets/images/star.png';
import ReviewItem from './review-item';

function ReviewsBlock() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch('https://6465e4429c09d77a62f6e60b.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);
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
      <div className="reviews-list">
        {items.map((obj) => (
          <ReviewItem key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default ReviewsBlock;
