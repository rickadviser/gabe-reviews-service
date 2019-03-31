/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  tabswitch__tab,
  active,
  tabNumbers,
  tabCategory,
} from './css/tabSwitcher.scss';

const Tab = ({
  selected,
  tabName,
  icon,
  total,
  category,
  selectTab,
  handleKeyPress,
}) => (
  <div
    className={`${tabswitch__tab} ${selected === tabName ? active : ''}`}
    role="button"
    tabIndex={-1}
    onClick={e => selectTab(e, tabName)}
    onKeyPress={handleKeyPress}
  >
    <FontAwesomeIcon icon={icon} size="lg" />
    <span className={tabNumbers}>{total}</span>
    <span className={tabCategory}>{category}</span>
  </div>
);

Tab.propTypes = {
  selected: PropTypes.string.isRequired,
  tabName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  selectTab: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
};

export default Tab;
