import React from 'react';

import photoPropTypes from '../../../../proptypes/photo';

import {
  review__photo,
  review__photo__description,
} from './photoReviewContent.scss';

const PhotoReviewContent = ({ photo }) => (
  <div>
    <div
      className={review__photo}
      style={{ background: `url("${photo.url}")` }}
    />
    <p className={review__photo__description}>{photo.description}</p>
  </div>
);

PhotoReviewContent.propTypes = {
  photo: photoPropTypes.isRequired,
};

export default PhotoReviewContent;
