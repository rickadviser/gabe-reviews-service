/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ratingbar__wrapper,
  ratingbar__bar__bg,
  ratingbar__bar__green,
} from './css/ratingsbar.scss';

const RatingBar = ({ type, total, percentage }) => {
  const totalWidth = 150;
  const barWidth = percentage * totalWidth;

  const [checkbox, setCheckbox] = useState(false);
  const toggleCheckbox = () => setCheckbox(!checkbox);

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
        <div className={ratingbar__bar__bg} style={{ width: totalWidth }}>
          <div className={ratingbar__bar__green} style={{ width: barWidth }} />
        </div>
      </div>
      <div>
        <span>{total}</span>
      </div>
    </div>
  );
};

RatingBar.propTypes = {
  type: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default RatingBar;
