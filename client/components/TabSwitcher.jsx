/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { tabswitch__wrapper } from './css/tabSwitcher.scss';

import Tab from './Tab';

const TabSwitcher = ({ update }) => {
  const [selected, setSelected] = useState('reviews');

  const selectTab = (e, tab) => {
    update(tab);
    setSelected(tab);
  };

  const handleKeyPress = e => {
    e.preventDefault();
    console.log(e.key);
  };

  const data = [
    {
      tabName: 'reviews',
      category: 'Reviews',
      icon: 'edit',
      total: 1200,
    },
    {
      tabName: 'photos',
      category: 'Photos',
      icon: 'camera',
      total: 1455,
    },
    {
      tabName: 'qa',
      category: 'Q & A',
      icon: 'comments',
      total: 745,
    },
    {
      tabName: 'room_tips',
      category: 'Rom Tips',
      icon: 'lightbulb',
      total: 1334,
    },
  ];

  return (
    <div className={tabswitch__wrapper}>
      {data.map(({ tabName, category, icon, total }) => (
        <Tab
          key={tabName}
          selected={selected}
          tabName={tabName}
          category={category}
          icon={icon}
          total={total}
          selectTab={selectTab}
          handleKeyPress={handleKeyPress}
        />
      ))}
    </div>
  );
};

TabSwitcher.propTypes = {
  update: PropTypes.func.isRequired,
};

export default TabSwitcher;
