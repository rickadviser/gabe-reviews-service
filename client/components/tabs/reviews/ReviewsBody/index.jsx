/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';

import HotelContext from '../../../../context/hotel-context';
import ReviewsContext from '../context/reviews-context';
import ReviewSingle from '../ReviewSingle/index';

const ReviewsBody = () => {
  const { reviews } = useContext(HotelContext);

  const {
    selectedRatings,
    selectedTimes,
    selectedTypes,
    selectedLanguage,
    searchTerm,
    getFilteredReviews,
  } = useContext(ReviewsContext);

  const filtered = getFilteredReviews(
    reviews,
    selectedRatings,
    selectedTimes,
    selectedTypes,
    selectedLanguage,
    searchTerm
  );

  return (
    <>
      {filtered.map(review => (
        <ReviewSingle key={review._id} review={review} />
      ))}
    </>
  );
};

export default ReviewsBody;
