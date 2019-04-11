import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import TabHeaderPresentational from './TabHeaderPresentational';

const TabHeader = ({ title, buttonText }) => {
  const [popup, setPopup] = useState(false);

  const toggleButtonPopup = (e, type) => {
    setPopup(typeof type === 'undefined' ? !popup : type);
  };

  const togglePopupOff = e => {
    if (
      e.target.id !== 'tabHeader_popup' &&
      e.target.id !== 'tabHeader_popup_button' &&
      e.target.className !== 'wrapper'
    ) {
      toggleButtonPopup(null, false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', togglePopupOff);

    return function removeListener() {
      document.removeEventListener('click', togglePopupOff);
    };
  });

  return (
    <TabHeaderPresentational
      title={title}
      buttonText={buttonText}
      popup={popup}
      toggleButtonPopup={toggleButtonPopup}
    />
  );
};

TabHeader.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default TabHeader;
