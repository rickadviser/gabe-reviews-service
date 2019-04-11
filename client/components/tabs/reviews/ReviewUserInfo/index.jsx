import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

import ReviewUserInfoPresentational from './ReviewUserInfoPresentational';

import getReviewPhrase from './getReviewPhrase';
import userPropTypes from '../../../../proptypes/users';

const ReviewUserInfo = ({ user, date, type }) => {
  const formattedDate = dateFormat(date, 'mmm yyyy');
  const [extrasPopup, setExtrasPopup] = useState(false);

  const toggleExtras = (_e, option) =>
    setExtrasPopup(typeof option === 'boolean' ? option : !extrasPopup);

  const togglePopupOff = e => {
    if (
      e.target.id !== 'extras_popup_wrapper' &&
      e.target.id !== 'extras_popup_ul' &&
      e.target.id !== 'extras_popup_li'
    ) {
      toggleExtras(null, false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', togglePopupOff);
    return function removeListener() {
      document.removeEventListener('click', togglePopupOff);
    };
  });

  const reviewPhrase = getReviewPhrase(type);

  return (
    <ReviewUserInfoPresentational
      user={user}
      formattedDate={formattedDate}
      reviewPhrase={reviewPhrase}
      toggleExtras={toggleExtras}
      extrasPopup={extrasPopup}
    />
  );
};

ReviewUserInfo.propTypes = {
  user: userPropTypes.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string,
};

ReviewUserInfo.defaultProps = {
  type: 'review',
};

export default ReviewUserInfo;
