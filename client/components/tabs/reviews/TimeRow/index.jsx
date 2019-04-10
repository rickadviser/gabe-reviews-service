import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import ReviewsContext from '../context/reviews-context';

import TimeRowPresentational from './TimeRowPresentational';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const TimeRow = ({ start, end }) => {
  const [checked, setChecked] = useState(false);
  const { dispatchTimes } = useContext(ReviewsContext);

  const handleCheck = () => {
    dispatchTimes({
      type: !checked ? 'add' : 'remove',
      payload: `${start} - ${end}`,
    });
    setChecked(!checked);
  };

  return (
    <TimeRowPresentational
      start={start}
      end={end}
      handleCheck={handleCheck}
      months={months}
      checked={checked}
    />
  );
};

TimeRow.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
};

export default TimeRow;
