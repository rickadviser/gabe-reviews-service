/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

import {
  ratingbar__wrapper,
  ratingbar__bar__bg,
  ratingbar__bar__green,
  ratingbar__inner__wrapper,
  label,
} from './ratingRow.scss';

import { styled__checkbox } from '../review.scss';

const RatingRowPresentational = ({
  type,
  checkbox,
  toggleCheckbox,
  measuredRef,
  barWidth,
  total,
}) => (
  <div className={ratingbar__wrapper}>
    <div className={ratingbar__inner__wrapper}>
      <div>
        <input
          className={styled__checkbox}
          id={type}
          type="checkbox"
          name="checkbox"
          value={checkbox}
          onChange={toggleCheckbox}
        />
        <label htmlFor={type} />
      </div>
      <label className={label} htmlFor={type}>
        <div>
          <span>{type}</span>
        </div>
        <div>
          <div
            ref={measuredRef}
            style={{ width: '90%' }}
            className={ratingbar__bar__bg}
          >
            <div
              className={ratingbar__bar__green}
              style={{ width: barWidth }}
            />
          </div>
        </div>
      </label>
    </div>
    <div>
      <span>{total}</span>
    </div>
  </div>
);

RatingRowPresentational.propTypes = {
  type: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  checkbox: PropTypes.bool.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  measuredRef: PropTypes.func.isRequired,
  barWidth: PropTypes.number.isRequired,
};

export default RatingRowPresentational;
