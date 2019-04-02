import React, { useContext } from 'react';

// import ReviewsContext from './context/reviews-context';
import HotelContext from '../../../context/hotel-context';
import RatingRow from './RatingRow';

import {
  getSubTotalsByRatings,
  getTotalRatings,
} from '../../../helpers/totalsByRatings';

import { reviews__subheader } from './css/review.scss';

const RatingsBar = () => {
  // reduce ratings to 5/4/3/2/1 star totals
  const { reviews } = useContext(HotelContext);
  const ratingsData = getSubTotalsByRatings(reviews);
  const totalRatings = getTotalRatings(ratingsData);

  return (
    <>
      <h4 className={reviews__subheader}>Traveler rating</h4>
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
    </>
  );
};

export default RatingsBar;
