import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import HotelContext from './hotel-context';

const GlobalState = ({ children, hotelId }) => {
  const [hotel, setHotel] = useState({
    address: {},
    nearest_airport: {},
  });

  const [reviews, setReviews] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [roomtips, setRooomtips] = useState([]);

  // Fetch hotel info and array of reviews (all types)
  useEffect(() => {
    const baseUrl = 'http://localhost:3000/api';

    fetch(`${baseUrl}/hotels/${hotelId}`)
      .then(res => res.json())
      .then(data => {
        setHotel(data[0]);
        return data[0];
      })
      .then(({ _id: id }) =>
        Promise.all([
          fetch(`${baseUrl}/hotels/${id}/reviews/general`),
          fetch(`${baseUrl}/hotels/${id}/reviews/photos`),
          fetch(`${baseUrl}/hotels/${id}/reviews/questions`),
          fetch(`${baseUrl}/hotels/${id}/reviews/roomtips`),
        ])
      )
      .then(rawData => Promise.all(rawData.map(i => i.json())))
      .then(([reviewData, photoData, questionData, roomtipData]) => {
        setReviews(reviewData);
        setPhotos(photoData);
        setQuestions(questionData);
        setRooomtips(roomtipData);
      })
      .catch(console.error);
  }, [hotelId]);

  const contextData = {
    hotel,
    setHotel,
    reviews,
    setReviews,
    photos,
    setPhotos,
    questions,
    setQuestions,
    roomtips,
    setRooomtips,
  };

  return (
    <HotelContext.Provider value={contextData}>
      {children}
    </HotelContext.Provider>
  );
};

GlobalState.propTypes = {
  children: PropTypes.node.isRequired,
  hotelId: PropTypes.string.isRequired,
};

export default GlobalState;
