import React, { useState, useContext } from 'react';

import ReviewsSearchPresentational from './ReviewsSearchPresentational';
import ReviewsContext from '../context/reviews-context';

const ReviewsSearch = () => {
  const { setSearchTerm } = useContext(ReviewsContext);
  const [search, setSearch] = useState('');
  const [outlined, setOutlined] = useState(false);

  const toggleWrapperOutline = () => setOutlined(!outlined);
  const updateSearchField = e => setSearch(e.target.value);

  const handleSearch = e => {
    if (!e.key || (e.key && e.key === 'Enter')) {
      setSearchTerm(search);
    }
  };

  const handleClear = e => {
    if (!e.key || (e.key && e.key === 'Enter')) {
      setSearch('');
      setSearchTerm('');
    }
  };

  const outlinedShadow =
    '2px 2px #078171, -2px -2px #078171, 2px -2px #078171, -2px 2px #078171';

  return (
    <ReviewsSearchPresentational
      toggleWrapperOutline={toggleWrapperOutline}
      updateSearchField={updateSearchField}
      handleSearch={handleSearch}
      handleClear={handleClear}
      outlinedShadow={outlinedShadow}
      outlined={outlined}
      search={search}
    />
  );
};

export default ReviewsSearch;
