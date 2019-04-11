import React, { useContext } from 'react';

import RatingsBarPresentational from './RatingsBarPresentational';
import HotelContext from '../../../../context/hotel-context';

import getSubTotalsByRatings from './totalsByRatings';

const RatingsBar = () => {
  const { reviews } = useContext(HotelContext);

  // reduce ratings to 5/4/3/2/1 star totals
  const ratingsData = getSubTotalsByRatings(reviews);

  return (
    <RatingsBarPresentational ratingsData={ratingsData} reviews={reviews} />
  );
};

export default RatingsBar;
