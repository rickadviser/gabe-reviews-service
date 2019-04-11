import React from 'react';
import PropTypes from 'prop-types';

import {
  review__stars__wrapper,
  review__stars__description,
} from './reviewStars.scss';

const ReviewStarsPresentational = ({ stars, text }) => (
  <div className={review__stars__wrapper}>
    <span>{stars}</span>
    {text && <span className={review__stars__description}>{text}</span>}
  </div>
);

ReviewStarsPresentational.propTypes = {
  text: PropTypes.string.isRequired,
  stars: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
};

export default ReviewStarsPresentational;
