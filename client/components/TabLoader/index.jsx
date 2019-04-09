import React from 'react';
import PropTypes from 'prop-types';

import Photos from '../tabs/photos';
import QAndA from '../tabs/qanda';
import RoomTips from '../tabs/roomtips';
import Reviews from '../tabs/reviews';

import { main__filter__wrapper } from '../css/main.scss';

const TabLoader = ({ tab }) => {
  let Component;

  switch (tab) {
    case 'Photos':
      Component = Photos;
      break;
    case 'Q & A':
      Component = QAndA;
      break;
    case 'Room Tips':
      Component = RoomTips;
      break;
    case 'Reviews':
    default:
      Component = Reviews;
  }

  return (
    <div className={main__filter__wrapper}>
      <Component />
    </div>
  );
};

TabLoader.propTypes = {
  tab: PropTypes.string.isRequired,
};

export default TabLoader;
