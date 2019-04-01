/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import HotelContext from '../context/hotel-context';
import Tab from './Tab';

import { tabswitch__wrapper } from './css/tabSwitcher.scss';

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
  const { reviews, photos, questions, roomtips } = useContext(HotelContext);

  // useEffect(() => {
  //   const baseUrl = 'http://localhost:3000/api';

  //   const { _id: id } = hotel;
  //   if (id) {
  //     Promise.all([
  //       fetch(`${baseUrl}/hotels/${id}/reviews/general`),
  //       fetch(`${baseUrl}/hotels/${id}/reviews/photos`),
  //       fetch(`${baseUrl}/hotels/${id}/reviews/questions`),
  //       fetch(`${baseUrl}/hotels/${id}/reviews/roomtips`),
  //     ])
  //       .then(rawData => Promise.all(rawData.map(i => i.json())))
  //       .then(allReviews => allReviews.map(i => i.length))
  //       .then(setLengths)
  //       .catch(console.error);
  //   }
  // }, [hotel]);

  // const [
  //   reviewTotal = 0,
  //   photoTotal = 0,
  //   questionTotal = 0,
  //   roomTipTotal = 0,
  // ] = lengths;

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