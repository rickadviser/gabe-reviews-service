import React from 'react';

import reviewPropTypes from '../../../proptypes/review';

import {
  review__inner__wrapper,
  review__content__wrapper,
} from './css/review.scss';

const ReviewContent = ({ review }) => {
  const { title, description, ratings } = review;
  return (
    <div className={`${review__inner__wrapper} ${review__content__wrapper}`}>
      <span>{`${ratings.overall} / 5`}</span>
      <h4>{title}</h4>
      <span>{description}</span>
    </div>
  );
};

ReviewContent.propTypes = {
  review: reviewPropTypes.isRequired,
};

export default ReviewContent;
