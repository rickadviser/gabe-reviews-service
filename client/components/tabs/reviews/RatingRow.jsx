/* eslint-disable camelcase */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  ratingbar__wrapper,
  ratingbar__bar__bg,
  ratingbar__bar__green,
} from './css/ratingsbar.scss';

const RatingRow = ({ type, total, percentage }) => {
  const [checkbox, setCheckbox] = useState(false);
  const [totalWidth, setTotalWidth] = useState(false);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setTotalWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const toggleCheckbox = () => setCheckbox(!checkbox);

  const barWidth = percentage * totalWidth;

  return (
    <div className={ratingbar__wrapper}>
      <div>
        <input
          type="checkbox"
          name="checkbox"
          value={checkbox}
          onChange={toggleCheckbox}
        />
      </div>
      <div>
        <span>{type}</span>
      </div>
      <div>
        <div
          ref={measuredRef}
          style={{ width: '90%' }}
          className={ratingbar__bar__bg}
        >
          <div className={ratingbar__bar__green} style={{ width: barWidth }} />
        </div>
      </div>
      <div>
        <span>{total}</span>
      </div>
    </div>
  );
};

RatingRow.propTypes = {
  type: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default RatingRow;
