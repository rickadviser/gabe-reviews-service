/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import HotelContext from '../../context/hotel-context';
import Tab from '../Tab/index';

import { tabswitch__wrapper } from './tabSwitcher.scss';

const TabSwitcher = ({ update }) => {
  const [selected, setSelected] = useState('Reviews');
  // const [lengths, setLengths] = useState([]);

  const selectTab = tab => {
    update(tab);
    setSelected(tab);
  };

  const handleKeyPress = e => {
    e.preventDefault();
    console.log(e.key);
  };

  // Get total review numbers
  const {
    reviews = {},
    photos = {},
    questions = {},
    roomtips = {},
  } = useContext(HotelContext);

  const data = [
    {
      category: 'Reviews',
      icon: 'edit',
      total: reviews.length || 99,
    },
    {
      category: 'Photos',
      icon: 'camera',
      total: photos.length || 7,
    },
    {
      category: 'Q & A',
      icon: 'comments',
      total: questions.length || 99,
    },
    {
      category: 'Room Tips',
      icon: 'lightbulb',
      total: roomtips.length || 99,
    },
  ];

  return (
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
};

TabSwitcher.propTypes = {
  update: PropTypes.func.isRequired,
};

export default TabSwitcher;
