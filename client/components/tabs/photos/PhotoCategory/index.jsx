import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import PhotosContext from '../context/PhotosContext';

import {
  photosBar__category,
  photosBar__category__active,
} from './photoCategory.scss';

const PhotoCategory = ({ category }) => {
  const { selectedCategory, setSelectedCategory } = useContext(PhotosContext);

  return (
    <button
      type="button"
      onClick={() => setSelectedCategory(category)}
      className={`${photosBar__category} ${
        selectedCategory === category ? photosBar__category__active : ''
      }`}
    >
      {category}
    </button>
  );
};

PhotoCategory.propTypes = {
  category: PropTypes.oneOf([
    'All',
    'Dining',
    'Pool & Beach',
    'Family and Play Areas',
    'Business Center & Event Rooms',
    'Room & Suite',
  ]).isRequired,
};

export default PhotoCategory;
