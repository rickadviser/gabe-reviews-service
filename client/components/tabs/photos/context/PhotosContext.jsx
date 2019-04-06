import React from 'react';

export default React.createContext({
  selectedRatings: [],
  selectedTimes: [],
  selectedTypes: [],
  selectedMentions: [],
  selectedLanguage: '',

  dispatchRatings: () => {},
  dispatchTimes: () => {},
  dispatchTypes: () => {},
  dispatchMentions: () => {},
  setLanguage: () => {},
  getFilteredReviews: () => {},
});
