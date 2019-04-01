import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import HotelContext from './hotel-context';

const GlobalState = ({ children, hotelId }) => {
  const [hotel, setHotel] = useState({
    address: {},
    nearest_airport: {},
  });

  useEffect(() => {
    fetch(`http://localhost:3000/api/hotels/${hotelId}`)
      .then(res => res.json())
      .then(data => setHotel(data[0]))
      .catch(console.error);
  }, [hotelId]);

  return (
    <HotelContext.Provider value={hotel}>{children}</HotelContext.Provider>
  );
};

GlobalState.propTypes = {
  children: PropTypes.node.isRequired,
  hotelId: PropTypes.string.isRequired,
};

export default GlobalState;
