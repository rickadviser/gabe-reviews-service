import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DownArrow from '../svg/DownArrow';

import {
  button__header,
  tabHeader__downArrow,
  tabHeader__wrapper,
  tabHeader__popup__wrapper,
  tabHeader__popup,
  popup__box,
  popup__box__link__wrapper,
  popup__box__link,
} from './tabHeader.scss';

import { button__primary, button, button__side } from '../css/main.scss';

const TabHeaderPresentational = ({
  title,
  buttonText,
  toggleButtonPopup,
  popup,
}) => (
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
          <DownArrow className={tabHeader__downArrow} />
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

TabHeaderPresentational.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  toggleButtonPopup: PropTypes.func.isRequired,
  popup: PropTypes.bool.isRequired,
};

export default TabHeaderPresentational;
