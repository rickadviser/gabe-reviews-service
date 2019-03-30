/* eslint-disable camelcase */
import React, { Component } from 'react';
import TabHeader from '../../TabHeader';
import RatingsBar from './RatingsBar';
import {
  reviews__wrapper,
  reviews__ratings,
  reviews__date,
  reviews__language,
  reviews__type,
  reviews__mentions,
} from './css/review.scss';

class Reviews extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <TabHeader title="Reviews" buttonText="Finish Your Review" />
        <div className={reviews__wrapper}>
          <div className={reviews__ratings}>
            <RatingsBar />
          </div>
          <div className={reviews__date}>
            <p>DATE</p>
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
  }
}

export default Reviews;
