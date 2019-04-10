/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

import { styled__checkbox, checkbox__wrapper } from '../review.scss';

const TimeRowPresentational = ({
  start,
  end,
  checked,
  handleCheck,
  months,
}) => (
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

TimeRowPresentational.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  handleCheck: PropTypes.func.isRequired,
  months: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default TimeRowPresentational;
