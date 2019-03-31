import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

const TimeRange = ({ start, end }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <span>{`${months[start]} - ${months[end]}`}</span>
    </div>
  );
};

TimeRange.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
};

export default TimeRange;
