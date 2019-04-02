import React, { useContext } from 'react';

import HotelContext from '../../../context/hotel-context';
import ReviewsContext from './context/reviews-context';

import { reviews__body__wrapper } from './css/review.scss';

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
    <div className={reviews__body__wrapper}>
      {filtered.map(({ title, date, traveler_type, language }) => (
        <div key={date}>
          <h3>{title}</h3>
          <p>{date}</p>
          <p>{traveler_type}</p>
          <p>{language}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsBody;
