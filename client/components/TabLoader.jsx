import React from 'react';
import PropTypes from 'prop-types';

import Photos from './tabs/photos';
import QAndA from './tabs/qanda';
import RoomTips from './tabs/roomtips';
import Reviews from './tabs/reviews';

const TabLoader = ({ tab }) => {
  switch (tab) {
    case 'photos':
      return <Photos />;
    case 'qa':
      return <QAndA />;
    case 'room_tips':
      return <RoomTips />;
    case 'reviews':
    default:
      return <Reviews />;
  }
};

TabLoader.propTypes = {
  tab: PropTypes.string.isRequired,
};

export default TabLoader;
