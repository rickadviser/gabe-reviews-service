import React from 'react';
import PropTypes from 'prop-types';

import ReviewButton from './ReviewButton';

import {
  review__links__wrapper,
  review__inner__wrapper,
  review__links__helpfulVotes,
  review__links,
} from './css/review.scss';

const ReviewLinks = ({ votes }) => (
  <div className={review__inner__wrapper}>
    <div className={review__links__wrapper}>
      {votes > 0 && (
        <div className={review__links__helpfulVotes}>
          <span>{votes}</span>
          <span> helpful votes</span>
        </div>
      )}
      <div className={review__links}>
        <ReviewButton icon="thumbs-up" text="Helpful" />
        <ReviewButton icon="retweet" text="Re-Post" />
        <ReviewButton icon="share" text="Share" />
      </div>
    </div>
  </div>
);

ReviewLinks.propTypes = {
  votes: PropTypes.number.isRequired,
};

export default ReviewLinks;
