import React from 'react';
import PropTypes from 'prop-types';

import RatingRow from '../RatingRow/index';
import { reviews__subheader } from '../review.scss';
import reviewPropTypes from '../../../../proptypes/review';

const RatingsBarPresentational = ({ ratingsData, reviews }) => (
  <>
    <h4 className={reviews__subheader}>Traveler rating</h4>
    <div>
      {ratingsData.map(({ type, rating, total }) => (
        <RatingRow
          key={rating}
          type={type}
          rating={rating}
          total={total}
          percentage={total / reviews.length}
        />
      ))}
    </div>
  </>
);

RatingsBarPresentational.propTypes = {
  ratingsData: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes.isRequired).isRequired,
};

export default RatingsBarPresentational;
