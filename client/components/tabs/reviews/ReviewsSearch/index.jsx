import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ReviewsContext from '../context/reviews-context';

import {
  reviews__search__wrapper,
  reviews__closeButton__wrapper,
  reviews__searchButton,
} from './reviewsSearch.scss';

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
    <div
      className={reviews__search__wrapper}
      style={{ boxShadow: outlined ? outlinedShadow : '' }}
    >
      <div>
        <FontAwesomeIcon
          icon="search"
          size="sm"
          onClick={handleSearch}
          className={reviews__searchButton}
        />
        <input
          type="text"
          name="search"
          value={search}
          onChange={updateSearchField}
          onKeyPress={handleSearch}
          placeholder="Search reviews..."
          onFocus={toggleWrapperOutline}
          onBlur={toggleWrapperOutline}
        />
        <span
          style={{ opacity: outlined ? 1 : 0 }}
          onClick={handleClear}
          onKeyPress={handleClear}
          role="button"
          tabIndex={-1}
          className={reviews__closeButton__wrapper}
        >
          <FontAwesomeIcon icon="times-circle" size="sm" />
        </span>
      </div>
    </div>
  );
};

export default ReviewsSearch;
