import React from 'react';
import PropTypes from 'prop-types';

import PhotoReviewContent from '../PhotoReviewContent/index';
import ReviewUserInfo from '../../reviews/ReviewUserInfo/index';
import ReviewLinks from '../../reviews/ReviewLinks/index';

import userPropTypes from '../../../../proptypes/users';

import { photo__review__wrapper } from './photoReview.scss';

const PhotoReview = ({ photo }) => (
  <div className={photo__review__wrapper}>
    <ReviewUserInfo user={photo.user_id} date={photo.date} type="photo" />
    <PhotoReviewContent photo={photo} />
    <ReviewLinks votes={photo.likes} type="photo" />
  </div>
);

PhotoReview.propTypes = {
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

export default PhotoReview;
