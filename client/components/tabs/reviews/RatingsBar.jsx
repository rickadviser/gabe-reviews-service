import React from 'react';
import PropTypes from 'prop-types';

import RatingBar from './RatingBar';

const RatingsBar = ({ data: { totalRatings, types } }) => {
  // reduce ratings to 5/4/3/2/1 star totals
  return (
    <div>
      {types.map(({ type, total }) => (
        <RatingBar
          type={type}
          total={total}
          percentage={total / totalRatings}
        />
      ))}
    </div>
  );
};

RatingsBar.propTypes = {
  data: PropTypes.shape({
    totalRatings: PropTypes.number.isRequired,
    types: PropTypes.array.isRequired,
  }).isRequired,
};

export default RatingsBar;
