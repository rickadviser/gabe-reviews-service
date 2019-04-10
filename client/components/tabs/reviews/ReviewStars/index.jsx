import React from 'react';
import PropTypes from 'prop-types';

import ReviewStarsPresentational from './ReviewStarsPresentational';

import { review__stars__full, review__stars__empty } from './reviewStars.scss';

const renderStars = (rating, size) => {
  const stars = [];
  for (let i = 1; i < 6; i++) {
    stars.push(
      <div
        key={i}
        className={i <= rating ? review__stars__full : review__stars__empty}
        style={{
          height: size === 'small' ? 14 : 16,
          width: size === 'small' ? 14 : 16,
        }}
      />
    );
  }
  return stars;
};

const ReviewStars = ({ rating, size, text }) => {
  const stars = renderStars(rating, size);

  return <ReviewStarsPresentational stars={stars} text={text} />;
};

ReviewStars.propTypes = {
  rating: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
  text: PropTypes.string,
};

ReviewStars.defaultProps = {
  size: 'large',
  text: '',
};

export default ReviewStars;
