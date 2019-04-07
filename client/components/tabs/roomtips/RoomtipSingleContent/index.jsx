import React from 'react';
import PropTypes from 'prop-types';

import ReviewStars from '../../reviews/ReviewStars/index';
import userPropTypes from '../../../../proptypes/users';

import {
  roomtip__single__inner__wrapper,
  roomtip__single__readMore,
} from './roomtipSingleContent.scss';

const RoomtipSingleContent = ({ roomtip }) => {
  console.log(roomtip);
  return (
    <div className={roomtip__single__inner__wrapper}>
      <ReviewStars rating={roomtip.rating} />
      <p>{`"${roomtip.tip}"`}</p>
      <a href="http://www.google.com" className={roomtip__single__readMore}>
        Read full review
      </a>
    </div>
  );
};

RoomtipSingleContent.propTypes = {
  roomtip: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    hotel_id: PropTypes.string.isRequired,
    tip: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    user_id: userPropTypes.isRequired,
  }).isRequired,
};

export default RoomtipSingleContent;
