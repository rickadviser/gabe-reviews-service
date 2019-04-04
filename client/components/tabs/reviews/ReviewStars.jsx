import React from 'react';
import PropTypes from 'prop-types';

import {
  review__stars__full,
  review__stars__empty,
  review__stars__wrapper,
} from '../../css/main.scss';

const renderStars = overall => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      i <= overall ? (
        <div key={i} className={review__stars__full} />
      ) : (
        <div key={i} className={review__stars__empty} />
      )
    );
  }
  return stars;
};

const ReviewStars = ({ rating }) => {
  const stars = renderStars(rating);

  return (
    <div className={review__stars__wrapper}>
      {stars}
      {/* <p>test</p> */}
    </div>
  );
};

ReviewStars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default ReviewStars;
