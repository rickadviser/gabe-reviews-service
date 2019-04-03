import React from 'react';
import ReviewButton from './ReviewButton';

import {
  review__links__wrapper,
  review__inner__wrapper,
} from './css/review.scss';

const ReviewLinks = () => (
  <div className={review__inner__wrapper}>
    <div className={review__links__wrapper}>
      <ReviewButton icon="thumbs-up" text="Helpful" />
      <ReviewButton icon="retweet" text="Re-Post" />
      <ReviewButton icon="share" text="Share" />
    </div>
  </div>
);

export default ReviewLinks;
