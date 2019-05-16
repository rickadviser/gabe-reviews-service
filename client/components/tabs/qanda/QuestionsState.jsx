import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import HotelContext from '../../../context/hotel-context';

const QuestionsState = ({ children }) => {
  const { hotelId, setQuestions, setLoading } = useContext(HotelContext);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/hotels/${hotelId}/reviews/questions`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      });
  }, [hotelId]);

  return <div>{children}</div>;
};

QuestionsState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuestionsState;
