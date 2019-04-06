import React from 'react';

import reviewPropTypes from '../../../../proptypes/review';

import ReviewUserInfo from '../ReviewUserInfo';
import ReviewContent from '../ReviewContent';
import ReviewLinks from '../ReviewLinks';

import { review__single__wrapper } from './reviewSingle.scss';

const ReviewSingle = ({ review }) => (
  <div className={review__single__wrapper}>
    <ReviewUserInfo user={review.user_id} date={review.date} />
    <ReviewContent review={review} />
    <ReviewLinks votes={review.helpful_votes} />
  </div>
);

ReviewSingle.propTypes = {
  review: reviewPropTypes.isRequired,
};

export default ReviewSingle;
