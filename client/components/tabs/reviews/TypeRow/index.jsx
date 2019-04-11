/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import ReviewsContext from '../context/reviews-context';
import TypeRowPresentational from './TypeRowPresentational';

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
    <TypeRowPresentational
      handleCheck={handleCheck}
      type={type}
      checked={checked}
    />
  );
};

TypeRow.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TypeRow;
