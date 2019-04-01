import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { styled__checkbox, checkbox__wrapper } from './css/review.scss';

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

  return (
    <div className={checkbox__wrapper}>
      <input
        className={styled__checkbox}
        id={start}
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
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
