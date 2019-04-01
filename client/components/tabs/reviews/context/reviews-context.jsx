import React from 'react';

// export default React.createContext({
//   rating: null,
//   type: null,
//   time: null,
//   language: null,
//   mentions: [],
//   reviews: [],
//   filteredReviews: [],
//   setRating: () => {},
//   setType: () => {},
//   setTime: () => {},
//   setLanguage: () => {},
//   setMentions: () => {},
//   setReviews: () => {},
//   setFilteredReviews: () => {},
// });

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
