/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';

import SkeletonList from './SkeletonList';
import HotelContext from '../../../context/hotel-context';
import ReviewsContext from './context/reviews-context';
import ReviewSingle from './ReviewSingle';

import { reviews__body__wrapper } from './css/review.scss';

const ReviewsBody = () => {
  const { reviews, loading } = useContext(HotelContext);

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
    <div className={reviews__body__wrapper}>
      {loading && (
        <>
          <SkeletonList />
          <SkeletonList />
        </>
      )}
      {filtered.map(review => (
        <ReviewSingle key={review._id} review={review} />
      ))}
    </div>
  );
};

export default ReviewsBody;
