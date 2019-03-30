import React from 'react';
import PropTypes from 'prop-types';

import RatingBar from './RatingBar';

const RatingsBar = ({ ratings }) => {
  // reduce ratings to 5/4/3/2/1 star totals
  const totalRatings = 99;
  const testData = [
    {
      type: 'Excellent',
      total: 12,
    },
    {
      type: 'Good',
      total: 29,
    },
    {
      type: 'Average',
      total: 35,
    },
    {
      type: 'Poor',
      total: 16,
    },
    {
      type: 'Excellent',
      total: 7,
    },
  ];
  return (
    <div>
      {testData.map(({ type, total }) => (
        <RatingBar
          type={type}
          total={total}
          percentage={total / totalRatings}
        />
      ))}
    </div>
  );
};

// RatingsBar.PropTypes = {
//   ratings:
// };

export default RatingsBar;
