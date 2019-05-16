import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ReviewsContext from '../context/reviews-context';

import {
  photosBar__category,
  photosBar__category__active,
} from '../../photos/PhotoCategory/photoCategory.scss';

const MentionsCategory = ({ mention }) => {
  const { selectedMention, setSelectedMention } = useContext(ReviewsContext);

  return (
    <button
      type="button"
      onClick={() => setSelectedMention(mention)}
      className={`${photosBar__category} ${
        selectedMention === mention ? photosBar__category__active : ''
      }`}
      style={{ marginRight: 5 }}
    >
      {mention}
    </button>
  );
};

MentionsCategory.propTypes = {
  mention: PropTypes.string.isRequired,
};

export default MentionsCategory;
