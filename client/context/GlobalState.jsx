import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import HotelContext from './hotel-context';

const GlobalState = ({ children }) => {
  const [hotel, setHotel] = useState({
    address: {},
    nearest_airport: {},
  });

  const [reviews, setReviews] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [roomtips, setRoomtips] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const baseUrl = 'http://localhost:3004/api';
    setLoading(true);
    fetch(`${baseUrl}/hotels/first`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setHotel(data);
      })
      .catch(console.error);
  }, []);

  const contextData = {
    hotel,
    hotelId: hotel._id,
    setHotel,
    reviews,
    setReviews,
    photos,
    setPhotos,
    questions,
    setQuestions,
    roomtips,
    setRoomtips,
    loading,
    setLoading,
  };

  return (
    <HotelContext.Provider value={contextData}>
      {children}
    </HotelContext.Provider>
  );
};

GlobalState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalState;
