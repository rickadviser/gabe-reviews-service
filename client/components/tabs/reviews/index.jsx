/* eslint-disable camelcase */
import React from 'react';

import ReviewsState from './context/ReviewsState';
import TabHeader from '../../TabHeader';
import RatingsBar from './RatingsBar/index';
import Times from './Times/index';
import Types from './Types/index';
import Languages from './Languages/index';
import BodyWrapper from '../BodyWrapper';
import ReviewsSearch from './ReviewsSearch/index';
import ReviewsBody from './ReviewsBody/index';
import ReviewMentions from './ReviewMentions/index';
import styles from './review.scss';

import { upper__wrapper } from '../../css/main.scss';

const {
  reviews__wrapper,
  reviews__ratings,
  reviews__date,
  reviews__language,
  reviews__type,
  reviews__mentions,
} = styles;

const Reviews = () => (
  <ReviewsState>
    <div className={upper__wrapper}>
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
          <ReviewMentions />
        </div>
      </div>
    </div>
    <div>
      <ReviewsSearch />
    </div>
    <div>
      <BodyWrapper>
        <ReviewsBody />
      </BodyWrapper>
    </div>
  </ReviewsState>
);

export default Reviews;
