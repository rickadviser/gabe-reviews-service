import React from 'react';
import PropTypes from 'prop-types';

import GlobalState from '../../context/GlobalState';
import TabSwitcher from '../TabSwitcher/index';
import TabLoader from '../TabLoader/index';

import { main__wrapper } from './mainComponent.scss';
import '../css/main.scss';

const Main = ({ hotelId, currentTab, setCurrentTab }) => (
  <GlobalState hotelId={hotelId}>
    <div className={main__wrapper}>
      <TabSwitcher update={setCurrentTab} />
      <TabLoader tab={currentTab} />
    </div>
  </GlobalState>
);

Main.propTypes = {
  hotelId: PropTypes.string.isRequired,
  currentTab: PropTypes.string.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
};

export default Main;
