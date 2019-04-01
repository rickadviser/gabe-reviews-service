/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable camelcase */
import React, { useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import ReviewsContext from './context/reviews-context';

import {
  ratingbar__wrapper,
  ratingbar__bar__bg,
  ratingbar__bar__green,
  ratingbar__inner__wrapper,
  label,
} from './css/ratingsbar.scss';

import { styled__checkbox } from './css/review.scss';

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
};

RatingRow.propTypes = {
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default RatingRow;
