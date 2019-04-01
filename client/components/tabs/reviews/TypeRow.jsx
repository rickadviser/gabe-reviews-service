/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { styled__checkbox, checkbox__wrapper } from './css/review.scss';

const TypeRow = ({ type }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={checkbox__wrapper}>
      <input
        className={styled__checkbox}
        id={type}
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor={type}>{type}</label>
    </div>
  );
};

TypeRow.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TypeRow;
