/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import ReviewsContext from '../context/reviews-context';

import { styled__checkbox, checkbox__wrapper } from '../review.scss';

const TypeRow = ({ type }) => {
  const [checked, setChecked] = useState(false);

  const { dispatchTypes } = useContext(ReviewsContext);

  const handleCheck = () => {
    dispatchTypes({
      type: !checked ? 'add' : 'remove',
      payload: type,
    });
    setChecked(!checked);
  };

  return (
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
};

TypeRow.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TypeRow;
