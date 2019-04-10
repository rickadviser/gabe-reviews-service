import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  button__header,
  tabHeader__wrapper,
  tabHeader__popup__wrapper,
  tabHeader__popup,
  popup__box,
  popup__box__link__wrapper,
  popup__box__link,
} from './tabHeader.scss';

import { button__primary, button, button__side } from '../css/main.scss';

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
    <div className={tabHeader__wrapper}>
      <h2>{title}</h2>
      <div>
        <button
          type="button"
          className={`${button} ${button__primary} ${button__header}`}
        >
          {buttonText}
        </button>
        <span id="tabHeader_popup" className={tabHeader__popup__wrapper}>
          <button
            type="button"
            id="tabHeader_popup_button"
            className={`${button} ${button__primary} ${button__side}`}
            onClick={toggleButtonPopup}
          >
            v
          </button>

          {popup && (
            <div className={`${tabHeader__popup} ${popup__box}`}>
              <div className={popup__box__link__wrapper}>
                <div className="wrapper">
                  <FontAwesomeIcon icon="edit" size="sm" />
                </div>
                <div className="wrapper">
                  <a href="http://www.google.com" className={popup__box__link}>
                    Finish Your Review
                  </a>
                </div>
              </div>
              <div className={popup__box__link__wrapper}>
                <div className="wrapper">
                  <FontAwesomeIcon icon="camera" size="sm" />
                </div>
                <div className="wrapper">
                  <a href="http://www.google.com" className={popup__box__link}>
                    Post a Photo
                  </a>
                </div>
              </div>
              <div className={popup__box__link__wrapper}>
                <div className="wrapper">
                  <FontAwesomeIcon icon="lightbulb" size="sm" />
                </div>
                <div className="wrapper">
                  <a href="http://www.google.com" className={popup__box__link}>
                    Ask a Question
                  </a>
                </div>
              </div>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

TabHeader.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default TabHeader;
