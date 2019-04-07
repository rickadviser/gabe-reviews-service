import React, { useContext } from 'react';

import HotelContext from '../../../../context/hotel-context';
import RoomtipsState from '../RoomtipsState';
import RoomtipSingle from '../RoomtipSingle/index';

const RoomtipsBody = () => {
  const { roomtips } = useContext(HotelContext);

  return (
    <RoomtipsState>
      {roomtips.map(tip => (
        <RoomtipSingle key={tip._id} roomtip={tip} />
      ))}
    </RoomtipsState>
  );
};

export default RoomtipsBody;
