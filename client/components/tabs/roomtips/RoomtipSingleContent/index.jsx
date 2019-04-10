import React from 'react';

import ReviewStars from '../../reviews/ReviewStars/index';

import {
  roomtip__single__inner__wrapper,
  roomtip__single__readMore,
} from './roomtipSingleContent.scss';

import roomtipPropTypes from '../../../../proptypes/roomtip';

const RoomtipSingleContent = ({ roomtip }) => (
  <div className={roomtip__single__inner__wrapper}>
    <ReviewStars rating={roomtip.rating} />
    <p>{`"${roomtip.tip}"`}</p>
    <a href="http://www.google.com" className={roomtip__single__readMore}>
      Read full review
    </a>
  </div>
);

RoomtipSingleContent.propTypes = {
  roomtip: roomtipPropTypes.isRequired,
};

export default RoomtipSingleContent;
