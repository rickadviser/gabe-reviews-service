import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';

// import HotelContext from '../../../../context/hotel-context';
import ReviewsContext from './reviews-context';

const ReviewsState = ({ children }) => {
  const reducerFunc = (state, action) => {
    switch (action.type) {
      case 'add':
        return [action.payload, ...state];
      case 'remove':
        return state.filter(i => i !== action.payload);
      default:
        return state;
    }
  };

  const [selectedRatings, dispatchRatings] = useReducer(reducerFunc, []);
  const [selectedTimes, dispatchTimes] = useReducer(reducerFunc, []);
  const [selectedTypes, dispatchTypes] = useReducer(reducerFunc, []);
  const [selectedMentions, dispatchMentions] = useReducer(reducerFunc, []);
  const [selectedLanguage, setLanguage] = useState('All');

  // const { reviews } = useContext(HotelContext);
  // console.log(reviews);

  const getFilteredReviews = (
    reviewsList,
    ratingsRange,
    timesRange,
    typesRange,
    language = 'all'
  ) => {
    let filteredReviews = [...reviewsList];

    if (ratingsRange.length) {
      // Only showing reviews with overall ratings matching selected range, not any
      filteredReviews = filteredReviews.filter(({ ratings }) =>
        ratingsRange.includes(ratings.overall)
      );
    }

    if (timesRange.length) {
      filteredReviews = filteredReviews.filter(review => {
        const dateRanges = timesRange.map(range =>
          range
            .split('-')
            .map(item => item.trim())
            .map(Number)
        );

        const ranges = [];

        dateRanges.forEach(([start, end]) => {
          for (let i = start; i <= end; i++) {
            ranges.push(i);
          }
        });

        const reviewMonth = new Date(review.date).getMonth();
        return ranges.includes(reviewMonth);
      });
    }

    if (typesRange.length) {
      filteredReviews = filteredReviews.filter(({ traveler_type }) =>
        typesRange.includes(traveler_type)
      );
    }

    if (
      language.toLowerCase() !== 'all' &&
      language.toLowerCase() !== 'all languages'
    ) {
      filteredReviews = filteredReviews.filter(
        review => review.language.toLowerCase() === language.toLowerCase()
      );
    }

    return filteredReviews;
  };

  const contextData = {
    selectedRatings,
    selectedTimes,
    selectedTypes,
    selectedMentions,
    selectedLanguage,

    dispatchRatings,
    dispatchTimes,
    dispatchTypes,
    dispatchMentions,
    setLanguage,
    getFilteredReviews,
  };

  return (
    <ReviewsContext.Provider value={contextData}>
      {children}
    </ReviewsContext.Provider>
  );
};

ReviewsState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReviewsState;
