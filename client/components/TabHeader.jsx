/* eslint-disable operator-linebreak */
/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './css/tabHeader.css';
import mainStyles from './css/main.css';

class TabHeader extends Component {
  state = {
    popup: false,
  };

  constructor(props) {
    super(props);
    this.toggleButtonPopup = this.toggleButtonPopup.bind(this);
    this.togglePopupOff = this.togglePopupOff.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.togglePopupOff);
  }

  componentWillUnount() {
    document.removeEventListener('click', this.togglePopupOff);
  }

  togglePopupOff(e) {
    if (
      e.target.id !== 'tabHeader_popup' &&
      e.target.id !== 'tabHeader_popup_button'
    ) {
      this.toggleButtonPopup(null, false);
    }
  }

  toggleButtonPopup(e, type) {
    this.setState(prevState => ({
      popup: typeof type === 'undefined' ? !prevState.popup : type,
    }));
  }

  render() {
    const { title, buttonText } = this.props;
    const { popup } = this.state;

    return (
      <div className={styles.tabHeader__wrapper}>
        <h2>{title}</h2>
        <div>
          <button
            type="button"
            className={`${mainStyles.button} ${mainStyles.button__primary} ${
              styles.button__header
            }`}
          >
            {buttonText}
          </button>
          <span
            id="tabHeader_popup"
            className={styles.tabHeader__popup__wrapper}
          >
            <button
              type="button"
              id="tabHeader_popup_button"
              className={`${mainStyles.button} ${mainStyles.button__primary} ${
                mainStyles.button__side
              }`}
              onClick={this.toggleButtonPopup}
            >
              v
            </button>
            <div
              className={`${styles.tabHeader__popup} ${mainStyles.popup__box}`}
              style={{ display: !popup ? 'none' : 'block' }}
            >
              <div className={mainStyles.popup__box__link__wrapper}>
                <div>
                  <FontAwesomeIcon icon="edit" size="sm" />
                </div>
                <div>
                  <a
                    href="http://www.google.com"
                    className={mainStyles.popup__box__link}
                  >
                    Finish Your Review
                  </a>
                </div>
              </div>
              <div className={mainStyles.popup__box__link__wrapper}>
                <div>
                  <FontAwesomeIcon icon="camera" size="sm" />
                </div>
                <div>
                  <a
                    href="http://www.google.com"
                    className={mainStyles.popup__box__link}
                  >
                    Post a Photo
                  </a>
                </div>
              </div>
              <div className={mainStyles.popup__box__link__wrapper}>
                <div>
                  <FontAwesomeIcon icon="lightbulb" size="sm" />
                </div>
                <div>
                  <a
                    href="http://www.google.com"
                    className={mainStyles.popup__box__link}
                  >
                    Ask a Question
                  </a>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

TabHeader.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default TabHeader;
