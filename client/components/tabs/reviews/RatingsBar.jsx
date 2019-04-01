import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReviewsContext from './context/reviews-context';

import RatingRow from './RatingRow';

const ratingSystem = [
  'Terrible',
  'Terrible',
  'Poor',
  'Average',
  'Good',
  'Excellent',
];

const RatingsBar = () => {
  // reduce ratings to 5/4/3/2/1 star totals
  const { reviews } = useContext(ReviewsContext);

  const ratingsData = reviews
    .reduce((acc, { ratings }) => {
      const rating = ratingSystem[ratings.overall];

      for (let i = 0; i < acc.length; i++) {
        if (acc[i].type === rating) {
          acc[i].total++;
          return acc;
        }
      }

      return [
        ...acc,
        {
          type: rating,
          rating: ratings.overall,
          total: 1,
        },
      ];
    }, [])
    .sort((a, b) => b.rating - a.rating);

  const totalRatings = ratingsData.reduce((acc, item) => acc + item.total, 0);

  return (
    <div>
      {ratingsData.map(({ type, total }) => (
        <RatingRow
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
