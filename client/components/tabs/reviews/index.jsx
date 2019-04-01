/* eslint-disable camelcase */
import React, { useContext } from 'react';

import HotelContext from '../../../context/hotel-context';

import TabHeader from '../../TabHeader';
import RatingsBar from './RatingsBar';
import Times from './Times';
import Types from './Types';
import Languages from './Languages';

import styles from './css/review.scss';

const {
  reviews__wrapper,
  reviews__ratings,
  reviews__date,
  reviews__language,
  reviews__type,
  reviews__mentions,
} = styles;

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
      type: 'Terrible',
      total: 7,
    },
  ],
};

const Reviews = () => {
  const hotelInfo = useContext(HotelContext);
  console.log(hotelInfo);

  return (
    <>
      <TabHeader title="Reviews" buttonText="Finish Your Review" />
      <div className={reviews__wrapper}>
        <div className={reviews__ratings}>
          <RatingsBar data={testData} />
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
    </>
  );
};

export default Reviews;
