import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import HotelContext from '../../../../context/hotel-context';
import PhotosContext from './PhotosContext';

const PhotosState = ({ children }) => {
  const { setPhotos, hotelId, setLoading } = useContext(HotelContext);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/api/hotels/${hotelId}/reviews/photos`)
      .then(res => res.json())
      .then(data => {
        setPhotos(data);
        setLoading(false);
      });
  }, [hotelId]);

  const contextData = {
    selectedCategory,
    setSelectedCategory,
  };

  return (
    <PhotosContext.Provider value={contextData}>
      {children}
    </PhotosContext.Provider>
  );
};

PhotosState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PhotosState;
