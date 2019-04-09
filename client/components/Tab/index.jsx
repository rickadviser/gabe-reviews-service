import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { tabswitch__tab, active, tabNumbers, tabCategory } from './tab.scss';

const Tab = ({ selected, icon, total, category, onClick, handleKeyPress }) => (
  <div
    className={`${tabswitch__tab} ${selected === category ? active : ''}`}
    role="button"
    tabIndex={-1}
    onClick={onClick}
    onKeyPress={handleKeyPress}
    data-testid={category}
  >
    <FontAwesomeIcon icon={icon} size="lg" />
    <span className={tabNumbers}>{total}</span>
    <span className={tabCategory}>{category}</span>
  </div>
);

Tab.propTypes = {
  selected: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
};

export default Tab;
