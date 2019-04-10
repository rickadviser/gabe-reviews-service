import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  reviews__search__wrapper,
  reviews__closeButton__wrapper,
  reviews__searchButton,
} from './reviewsSearch.scss';

const ReviewsSearchPresentational = ({
  toggleWrapperOutline,
  outlined,
  outlinedShadow,
  handleSearch,
  handleClear,
  search,
  updateSearchField,
}) => (
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

ReviewsSearchPresentational.propTypes = {
  toggleWrapperOutline: PropTypes.func.isRequired,
  outlined: PropTypes.bool.isRequired,
  outlinedShadow: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  updateSearchField: PropTypes.func.isRequired,
};

export default ReviewsSearchPresentational;
