import React from 'react';
import PropTypes from 'prop-types';

import ReviewButton from '../ReviewButton/index';

import { review__inner__wrapper } from '../review.scss';

import {
  review__links__wrapper,
  review__links__helpfulVotes,
  review__links,
} from './reviewLinks.scss';

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
