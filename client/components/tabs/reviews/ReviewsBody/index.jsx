/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';

import HotelContext from '../../../../context/hotel-context';
import ReviewsContext from '../context/reviews-context';
import ReviewSingle from '../ReviewSingle/index';
import EmptyList from '../EmptyList/index';

const ReviewsBody = () => {
  const { reviews } = useContext(HotelContext);

  const {
    selectedRatings,
    selectedTimes,
    selectedTypes,
    selectedLanguage,
    selectedMention,
    searchTerm,
    getFilteredReviews,
  } = useContext(ReviewsContext);

  const filtered = getFilteredReviews(
    reviews,
    selectedRatings,
    selectedTimes,
    selectedTypes,
    selectedLanguage,
    selectedMention,
    searchTerm
  );

  return (
    <>
      {filtered.map(review => (
        <ReviewSingle key={review._id} review={review} />
      ))}

      {filtered.length === 0 && <EmptyList />}
    </>
  );
};

export default ReviewsBody;
