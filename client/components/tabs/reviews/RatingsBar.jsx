import React, { useContext } from 'react';
// import ReviewsContext from './context/reviews-context';
import HotelContext from '../../../context/hotel-context';
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
  const { reviews } = useContext(HotelContext);

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
      {ratingsData.map(({ type, rating, total }) => (
        <RatingRow
          type={type}
          rating={rating}
          total={total}
          percentage={total / totalRatings}
        />
      ))}
    </div>
  );
};

export default RatingsBar;
