import React, { useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import HotelContext from '../../../../context/hotel-context';
import ReviewsContext from './reviews-context';

const ReviewsState = ({ children }) => {
  const hotelInfo = useContext(HotelContext);
  const { _id: id } = hotelInfo;

  const [reviews, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'populate':
        return action.payload;
      case 'add':
        return [action.payload, ...state];
      default:
        return state;
    }
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/api/hotels/${id}/reviews/general`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'populate',
          payload: data,
        });
      })
      .catch(console.error);
  }, [id]);

  const contextData = {
    reviews,
    dispatch,
  };

  return (
    <ReviewsContext.Provider value={contextData}>
      {children}
    </ReviewsContext.Provider>
  );
};

ReviewsState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReviewsState;
