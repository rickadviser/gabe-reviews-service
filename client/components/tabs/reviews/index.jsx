/* eslint-disable camelcase */
import React from 'react';
import TabHeader from '../../TabHeader';
import RatingsBar from './RatingsBar';
import Time from './Time';

import {
  reviews__wrapper,
  reviews__ratings,
  reviews__date,
  reviews__language,
  reviews__type,
  reviews__mentions,
} from './css/review.scss';

const Reviews = () => {
  const testData = {
    totalRatings: 99,
    types: [
      {
        type: 'Excellent',
        total: 12,
      },
      {
        type: 'Good',
        total: 29,
      },
      {
        type: 'Average',
        total: 35,
      },
      {
        type: 'Poor',
        total: 16,
      },
      {
        type: 'Excellent',
        total: 7,
      },
    ],
  };

  return (
    <React.Fragment>
      <TabHeader title="Reviews" buttonText="Finish Your Review" />
      <div className={reviews__wrapper}>
        <div className={reviews__ratings}>
          <RatingsBar data={testData} />
        </div>
        <div className={reviews__date}>
          <Time />
        </div>
        <div className={reviews__type}>
          <p>TYPE</p>
        </div>
        <div className={reviews__language}>
          <p>LANGUAGE</p>
        </div>
        <div className={reviews__mentions}>
          <p>MENTIONS</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Reviews;
