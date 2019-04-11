import React from 'react';
import PropTypes from 'prop-types';

import GlobalState from '../../context/GlobalState';
import TabSwitcher from '../TabSwitcher/index';
import TabLoader from '../TabLoader/index';

import { main__wrapper } from './mainComponent.scss';
import '../css/main.scss';

const MainPresentational = ({ currentTab, setCurrentTab }) => (
  <GlobalState>
    <div className={main__wrapper}>
      <TabSwitcher update={setCurrentTab} />
      <TabLoader tab={currentTab} />
    </div>
  </GlobalState>
);

MainPresentational.propTypes = {
  currentTab: PropTypes.string.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
};

export default MainPresentational;
