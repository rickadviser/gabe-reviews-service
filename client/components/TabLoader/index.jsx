import React from 'react';
import PropTypes from 'prop-types';

import { main__filter__wrapper } from '../css/main.scss';

// const Photos = lazy(() => import('../tabs/photos'));
// const QAndA = lazy(() => import('../tabs/qanda'));
// const RoomTips = lazy(() => import('../tabs/roomtips'));
// const Reviews = lazy(() => import('../tabs/reviews'));
import Photos from '../tabs/photos/index';
import QAndA from '../tabs/qanda/index';
import RoomTips from '../tabs/roomtips/index';
import Reviews from '../tabs/reviews/index';

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
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Component />
      {/* </Suspense> */}
    </div>
  );
};

TabLoader.propTypes = {
  tab: PropTypes.string.isRequired,
};

export default TabLoader;
