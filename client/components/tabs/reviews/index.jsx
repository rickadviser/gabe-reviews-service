/* eslint-disable camelcase */
import React from 'react';

import ReviewsState from './context/ReviewsState';
import TabHeader from '../../TabHeader';
import RatingsBar from './RatingsBar';
import Times from './Times';
import Types from './Types';
import Languages from './Languages';
import ReviewsSearch from './ReviewsSearch';
import ReviewsBody from './ReviewsBody';
import styles from './css/review.scss';

const {
  reviews__upper__wrapper,
  reviews__wrapper,
  reviews__ratings,
  reviews__date,
  reviews__language,
  reviews__type,
  reviews__mentions,
} = styles;

const Reviews = () => (
  <ReviewsState>
    <div className={reviews__upper__wrapper}>
      <TabHeader title="Reviews" buttonText="Finish Your Review" />
      <div className={reviews__wrapper}>
        <div className={reviews__ratings}>
          <RatingsBar />
        </div>
        <div className={reviews__date}>
          <Times />
        </div>
        <div className={reviews__type}>
          <Types />
        </div>
        <div className={reviews__language}>
          <Languages />
        </div>
        <div className={reviews__mentions}>
          <p>MENTIONS</p>
        </div>
      </div>
    </div>
    <div>
      <ReviewsSearch />
    </div>
    <div>
      <ReviewsBody />
    </div>
  </ReviewsState>
);

export default Reviews;
