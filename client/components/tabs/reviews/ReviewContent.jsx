import React, { useState } from 'react';
import formatDate from 'dateformat';

import reviewPropTypes from '../../../proptypes/review';
import getReviewDescription from '../../../helpers/getReviewDescription';

import {
  review__inner__wrapper,
  review__content__wrapper,
  review__dateOfStay,
} from './css/review.scss';

import { review__stars__full, review__stars__empty } from '../../css/main.scss';

const ReviewContent = ({ review }) => {
  const { title, description, ratings } = review;

  const [more, setMore] = useState(false);

  const toggleMore = e => {
    e.preventDefault();
    setMore(!more);
  };

  const showStars = ({ overall }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= overall ? (
          <div key={i} className={review__stars__full} />
        ) : (
          <div key={i} className={review__stars__empty} />
        )
      );
    }
    return stars;
  };

  const formattedDate = formatDate(review.date, 'mmm yyyy');
  const trimmedDescription = getReviewDescription(description, more);
  const stars = showStars(ratings);

  return (
    <div className={`${review__inner__wrapper} ${review__content__wrapper}`}>
      {stars}
      <h4>{title}</h4>
      <p>{trimmedDescription}</p>
      <a href="http://google.com" onClick={toggleMore}>
        {more ? 'Read less' : 'Read more'}
      </a>
      <span>
        <span className={review__dateOfStay}>Date of Stay: </span>
        <span>{formattedDate}</span>
      </span>
    </div>
  );
};

ReviewContent.propTypes = {
  review: reviewPropTypes.isRequired,
};

export default ReviewContent;
