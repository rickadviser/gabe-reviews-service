import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import HotelContext from '../../context/hotel-context';
import TabSwitcherPresentational from './TabSwitcherPresentational';

const TabSwitcher = ({ update }) => {
  const [selected, setSelected] = useState('Reviews');

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
    <TabSwitcherPresentational
      data={data}
      selected={selected}
      handleKeyPress={handleKeyPress}
      selectTab={selectTab}
    />
  );
};

TabSwitcher.propTypes = {
  update: PropTypes.func.isRequired,
};

export default TabSwitcher;
