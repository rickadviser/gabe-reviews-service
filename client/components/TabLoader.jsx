import React from 'react';
import PropTypes from 'prop-types';

import Photos from './tabs/Photos';
import QAndA from './tabs/QAndA';
import RoomTips from './tabs/RoomTips';
import Reviews from './tabs/Reviews';

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
