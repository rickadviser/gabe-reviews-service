import React from 'react';
import PropTypes from 'prop-types';

import Tab from '../Tab/index';

import { tabswitch__wrapper } from './tabSwitcher.scss';

const TabSwitcherPresentational = ({
  data,
  selected,
  selectTab,
  handleKeyPress,
}) => (
  <div className={tabswitch__wrapper}>
    {data.map(({ category, icon, total }) => (
      <Tab
        key={category}
        selected={selected}
        category={category}
        icon={icon}
        total={total}
        onClick={() => selectTab(category)}
        handleKeyPress={handleKeyPress}
      />
    ))}
  </div>
);

TabSwitcherPresentational.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  selected: PropTypes.string.isRequired,
  selectTab: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
};

export default TabSwitcherPresentational;
