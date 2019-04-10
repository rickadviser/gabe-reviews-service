import React from 'react';
import PropTypes from 'prop-types';

import userPropTypes from '../../../../proptypes/users';

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
  photo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    category: PropTypes.oneOf([
      'Dining',
      'Pool & Beach',
      'Family and Play Areas',
    ]).isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    hotel_id: PropTypes.string.isRequired,
    user_id: userPropTypes.isRequired,
  }).isRequired,
};

export default PhotoReviewContent;

//
//
//
