import React from 'react';
import PropTypes from 'prop-types';

import PhotoCategory from '../PhotoCategory/index';

import { photosBar__wrapper } from './photosBar.scss';

const PhotosBarPresentational = ({ categories }) => (
  <div className={photosBar__wrapper} data-testid="photosbar">
    <h5>Album Categories</h5>
    <ul>
      <li>
        <PhotoCategory category="All" />
      </li>
      {categories.map(category => (
        <li key={category}>
          <PhotoCategory category={category} />
        </li>
      ))}
    </ul>
  </div>
);

PhotosBarPresentational.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default PhotosBarPresentational;
