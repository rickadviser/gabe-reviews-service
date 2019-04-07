import React from 'react';
import PropTypes from 'prop-types';

import ReviewUserInfo from '../../reviews/ReviewUserInfo/index';
import RoomtipSingleContent from '../RoomtipSingleContent/index';

import { roomtip__single__wrapper } from './roomtipSingle.scss';

import userPropTypes from '../../../../proptypes/users';

const RoomtipSingle = ({ roomtip }) => (
  <div className={roomtip__single__wrapper}>
    <ReviewUserInfo
      user={roomtip.user_id}
      date={roomtip.date}
      type="room_tip"
    />
    <RoomtipSingleContent roomtip={roomtip} />
  </div>
);

RoomtipSingle.propTypes = {
  roomtip: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    hotel_id: PropTypes.string.isRequired,
    tip: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    user_id: userPropTypes.isRequired,
  }).isRequired,
};

export default RoomtipSingle;
