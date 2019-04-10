import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { review__smallButton__wrapper } from './reviewButton.scss';

const ReviewButton = ({ icon, text, ...others }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
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
};

ReviewButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ReviewButton;
