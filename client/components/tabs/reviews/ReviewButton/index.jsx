import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { review__smallButton__wrapper } from './reviewButton.scss';

const ReviewButton = ({ icon, text, ...others }) => (
  <div className={review__smallButton__wrapper}>
    <FontAwesomeIcon icon={icon} size="sm" color="#A8B4BE" {...others} />
    {text && <span>{text}</span>}
  </div>
);

ReviewButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ReviewButton;
