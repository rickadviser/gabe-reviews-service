import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ReviewButtonPresentational from './ReviewButtonPresentational';

const ReviewButton = ({ icon, text, ...others }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <ReviewButtonPresentational
      toggleHover={toggleHover}
      icon={icon}
      hovered={hovered}
      text={text}
      {...others}
    />
  );
};

ReviewButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ReviewButton;
