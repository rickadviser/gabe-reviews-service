import React from 'react';
import PropTypes from 'prop-types';

import capitalize from '../../../../helpers/capitalize';
import ReviewStars from '../ReviewStars/index';
import reviewPropTypes from '../../../../proptypes/review';

import { review__inner__wrapper } from '../review.scss';

import {
  review__content__wrapper,
  review__content__key,
  review__content__tripType,
  review__content__tripInfo,
  review__content__advisory,
  review__extras__stars__wrapper,
} from './reviewContent.scss';

const ReviewContentPresentational = ({
  title,
  ratings,
  toggleMore,
  formattedDate,
  trimmedDescription,
  tripType,
  review,
  more,
}) => (
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
          <div className={review__extras__stars__wrapper}>
            {Object.keys(review.ratings).map(key => {
              if (key !== '_id' && key !== 'overall') {
                return (
                  <ReviewStars
                    key={key}
                    rating={review.ratings[key]}
                    text={capitalize(key.replace('_', ' '))}
                    size="small"
                  />
                );
              }

              return null;
            })}
          </div>
          <div className={review__content__advisory}>
            <span>
              This review is the subjective opinion of a RickAdvisor member and
              not of RickAdvisor LLC.
            </span>
          </div>
        </>
      )}
    </div>
  </div>
);

ReviewContentPresentational.propTypes = {
  title: PropTypes.string.isRequired,
  ratings: PropTypes.shape({
    overall: PropTypes.number.isRequired,
    cleanliness: PropTypes.number.isRequired,
    location: PropTypes.number.isRequired,
    service: PropTypes.number.isRequired,
    sleep_quality: PropTypes.number.isRequired,
  }).isRequired,
  toggleMore: PropTypes.func.isRequired,
  formattedDate: PropTypes.string.isRequired,
  trimmedDescription: PropTypes.string.isRequired,
  tripType: PropTypes.string.isRequired,
  review: reviewPropTypes.isRequired,
  more: PropTypes.bool.isRequired,
};

export default ReviewContentPresentational;
