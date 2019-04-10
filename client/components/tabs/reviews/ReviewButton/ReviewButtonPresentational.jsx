import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { review__smallButton__wrapper } from './reviewButton.scss';

const ReviewButtonPresentational = ({
  toggleHover,
  icon,
  hovered,
  text,
  ...others
}) => (
  <div
    className={review__smallButton__wrapper}
    onMouseOver={toggleHover}
    onMouseOut={toggleHover}
    onFocus={toggleHover}
    onBlur={toggleHover}
  >
    <FontAwesomeIcon
      icon={icon}
      size="sm"
      color={hovered ? '#5da880' : '#A8B4BE'}
      {...others}
    />
    {text && (
      <span style={{ textDecoration: hovered ? 'underline' : 'none' }}>
        {text}
      </span>
    )}
  </div>
);

ReviewButtonPresentational.propTypes = {
  toggleHover: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  hovered: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default ReviewButtonPresentational;
