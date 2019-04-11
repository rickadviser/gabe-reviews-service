import React, { useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import ReviewsContext from '../context/reviews-context';
import RatingRowPresentational from './RatingRowPresentational';

const RatingRow = ({ type, rating, total, percentage }) => {
  const [checkbox, setCheckbox] = useState(false);
  const [totalWidth, setTotalWidth] = useState(false);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setTotalWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const { dispatchRatings } = useContext(ReviewsContext);

  const toggleCheckbox = () => {
    dispatchRatings({
      type: !checkbox ? 'add' : 'remove',
      payload: rating,
    });
    setCheckbox(!checkbox);
  };

  const barWidth = percentage * totalWidth;

  return (
    <RatingRowPresentational
      type={type}
      checkbox={checkbox}
      toggleCheckbox={toggleCheckbox}
      measuredRef={measuredRef}
      barWidth={barWidth}
      total={total}
    />
  );
};

RatingRow.propTypes = {
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default RatingRow;
