import React from 'react';

export default React.createContext({
  rating: null,
  type: null,
  time: null,
  language: null,
  mentions: [],
  reviews: [],
  filteredReviews: [],
  setRating: () => {},
  setType: () => {},
  setTime: () => {},
  setLanguage: () => {},
  setMentions: () => {},
  setReviews: () => {},
  setFilteredReviews: () => {},
});
