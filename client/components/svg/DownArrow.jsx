import React from 'react';
import PropTypes from 'prop-types';

const DownArrow = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 386.257 386.257"
  >
    <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />
  </svg>
);

DownArrow.propTypes = {
  className: PropTypes.string.isRequired,
};

export default DownArrow;
