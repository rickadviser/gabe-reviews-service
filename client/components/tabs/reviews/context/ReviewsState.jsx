import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';

import ReviewsContext from './reviews-context';

import getFilteredReviews from '../../../../helpers/filteredReviews';
import crudReducer from '../../../../helpers/crudReducer';

const ReviewsState = ({ children }) => {
  const [selectedRatings, dispatchRatings] = useReducer(crudReducer, []);
  const [selectedTimes, dispatchTimes] = useReducer(crudReducer, []);
  const [selectedTypes, dispatchTypes] = useReducer(crudReducer, []);
  const [selectedMentions, dispatchMentions] = useReducer(crudReducer, []);
  const [selectedLanguage, setLanguage] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const contextData = {
    selectedRatings,
    selectedTimes,
    selectedTypes,
    selectedMentions,
    selectedLanguage,
    searchTerm,

    dispatchRatings,
    dispatchTimes,
    dispatchTypes,
    dispatchMentions,
    setLanguage,
    setSearchTerm,
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
