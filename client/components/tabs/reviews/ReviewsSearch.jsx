import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ReviewsContext from './context/reviews-context';

import { reviews__search__wrapper } from './css/review.scss';

const ReviewsSearch = () => {
  const { searchTerm, setSearchTerm } = useContext(ReviewsContext);

  return (
    <div className={reviews__search__wrapper}>
      <div>
        <FontAwesomeIcon icon="search" size="sm" />
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search reviews..."
        />
      </div>
    </div>
  );
};

export default ReviewsSearch;
