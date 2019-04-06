/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import ReviewsContext from '../context/reviews-context';

import { styled__checkbox, checkbox__wrapper } from '../review.scss';

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
    <div className={checkbox__wrapper}>
      <input
        className={styled__checkbox}
        id={start}
        type="checkbox"
        value={checked}
        onChange={handleCheck}
      />
      <label htmlFor={start}>{`${months[start]} - ${months[end]}`}</label>
    </div>
  );
};

TimeRow.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
};

export default TimeRow;
