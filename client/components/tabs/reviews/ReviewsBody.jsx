import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import HotelContext from '../../../context/hotel-context';
import ReviewsContext from './context/reviews-context';

const ReviewsBody = () => {
  const { reviews } = useContext(HotelContext);

  const {
    selectedRatings,
    selectedTimes,
    selectedTypes,
    selectedLanguage,
    getFilteredReviews,
  } = useContext(ReviewsContext);

  const filtered = getFilteredReviews(
    reviews,
    selectedRatings,
    selectedTimes,
    selectedTypes,
    selectedLanguage
  );

  return (
    <div>
      {filtered.map(({ title, date, type, language }) => (
        <div>
          <h1>{title}</h1>
          <p>{date}</p>
          <p>{type}</p>
          <p>{language}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsBody;
