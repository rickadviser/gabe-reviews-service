import React from 'react';

export default React.createContext({
  selectedRatings: [],
  selectedTimes: [],
  selectedTypes: [],
  selectedLanguage: '',
  selectedMention: '',
  searchTerm: '',

  dispatchRatings: () => {},
  dispatchTimes: () => {},
  dispatchTypes: () => {},
  setLanguage: () => {},
  setSearchTerm: () => {},
  setSelectedMention: () => {},
  getFilteredReviews: () => {},
});
