import React from 'react';
import PropTypes from 'prop-types';

import Photos from './tabs/photos';
import QAndA from './tabs/qanda';
import RoomTips from './tabs/roomtips';
import Reviews from './tabs/reviews';

import { main__filter__wrapper } from './css/main.scss';

const TabLoader = ({ tab }) => {
  let component;

  switch (tab) {
    case 'photos':
      component = <Photos />;
      break;
    case 'qa':
      component = <QAndA />;
      break;
    case 'room_tips':
      component = <RoomTips />;
      break;
    case 'reviews':
    default:
      component = <Reviews />;
  }

  return <div className={main__filter__wrapper}>{component}</div>;
};

TabLoader.propTypes = {
  tab: PropTypes.string.isRequired,
};

export default TabLoader;
