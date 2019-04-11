import React from 'react';
import PropTypes from 'prop-types';

import PhotoReview from '../PhotoReview/index';

import photoPropTypes from '../../../../proptypes/photo';

const PhotosBodyPresentational = ({ filtered }) => (
  <>
    {filtered.map(photo => (
      <PhotoReview key={photo._id} photo={photo} />
    ))}
  </>
);

PhotosBodyPresentational.propTypes = {
  filtered: PropTypes.arrayOf(photoPropTypes.isRequired),
};

PhotosBodyPresentational.defaultProps = {
  filtered: [],
};

export default PhotosBodyPresentational;
