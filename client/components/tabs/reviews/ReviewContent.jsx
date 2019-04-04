import React, { useState } from 'react';
import formatDate from 'dateformat';

import reviewPropTypes from '../../../proptypes/review';
import getReviewDescription from '../../../helpers/getReviewDescription';
import getTripType from '../../../helpers/getTripType';

import ReviewStars from './ReviewStars';

import {
  review__inner__wrapper,
  review__content__wrapper,
  review__content__key,
  review__content__tripType,
  review__content__tripInfo,
  review__content__advisory,
} from './css/review.scss';

const ReviewContent = ({ review }) => {
  const { title, description, ratings } = review;

  const [more, setMore] = useState(false);

  const toggleMore = e => {
    e.preventDefault();
    setMore(!more);
  };

  const formattedDate = formatDate(review.date, 'mmm yyyy');
  const trimmedDescription = getReviewDescription(description, more);
  const tripType = getTripType(review.traveler_type);

  return (
    <div className={`${review__inner__wrapper} ${review__content__wrapper}`}>
      <ReviewStars rating={ratings.overall} />
      <h4>{title}</h4>
      <p>{trimmedDescription}</p>
      <a href="http://google.com" onClick={toggleMore}>
        {more ? 'Read less' : 'Read more'}
      </a>
      <div className={review__content__tripInfo}>
        <div>
          <span className={review__content__key}>Date of Stay: </span>
          <span>{formattedDate}</span>
        </div>
        {more && (
          <>
            <div className={review__content__tripType}>
              <span className={review__content__key}>Trip Type: </span>
              <span>{tripType}</span>
            </div>
            <div className={review__content__advisory}>
              <span>
                This review is the subjective opinion of a RickAdvisor member
                and not of RickAdvisor LLC.
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

ReviewContent.propTypes = {
  review: reviewPropTypes.isRequired,
};

export default ReviewContent;
