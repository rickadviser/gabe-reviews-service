/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

import { styled__checkbox, checkbox__wrapper } from '../review.scss';

const TypeRowPresentational = ({ type, checked, handleCheck }) => (
  <div className={checkbox__wrapper}>
    <input
      className={styled__checkbox}
      id={type}
      type="checkbox"
      value={checked}
      onChange={handleCheck}
    />
    <label htmlFor={type}>{type}</label>
  </div>
);

TypeRowPresentational.propTypes = {
  type: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleCheck: PropTypes.func.isRequired,
};

export default TypeRowPresentational;
