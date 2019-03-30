import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './css/tabSwitcher.scss';

const TabSwitcher = ({ update }) => {
  const [selected, setSelected] = useState('reviews');

  const selectTab = (e, tab) => {
    update(tab);
    setSelected(tab);
  };

  const handleKeyPress = e => {
    e.preventDefault();
    console.log(e.key);
  };

  return (
    <div className={styles.tabswitch__wrapper}>
      <div
        className={`${styles.tabswitch__tab} ${
          selected === 'reviews' ? styles.active : ''
        }`}
        role="button"
        tabIndex={-1}
        onClick={e => selectTab(e, 'reviews')}
        onKeyPress={handleKeyPress}
      >
        <FontAwesomeIcon icon="edit" size="lg" />
        <span className={styles.tabNumbers}>1,200</span>
        <span className={styles.tabCategory}>Reviews</span>
      </div>
      <div
        className={`${styles.tabswitch__tab} ${
          selected === 'photos' ? styles.active : ''
        }`}
        role="button"
        tabIndex={-1}
        onClick={e => selectTab(e, 'photos')}
        onKeyPress={handleKeyPress}
      >
        <FontAwesomeIcon icon="camera" size="lg" />
        <span className={styles.tabNumbers}>1,455</span>
        <span className={styles.tabCategory}>Photos</span>
      </div>
      <div
        className={`${styles.tabswitch__tab} ${
          selected === 'qa' ? styles.active : ''
        }`}
        role="button"
        tabIndex={-1}
        onClick={e => selectTab(e, 'qa')}
        onKeyPress={handleKeyPress}
      >
        <FontAwesomeIcon icon="comments" size="lg" />
        <span className={styles.tabNumbers}>745</span>
        <span className={styles.tabCategory}>Q &amp; A</span>
      </div>
      <div
        className={`${styles.tabswitch__tab} ${
          selected === 'room_tips' ? styles.active : ''
        }`}
        role="button"
        tabIndex={-1}
        onClick={e => selectTab(e, 'room_tips')}
        onKeyPress={handleKeyPress}
      >
        <FontAwesomeIcon icon="lightbulb" size="lg" />
        <span className={styles.tabNumbers}>1,334</span>
        <span className={styles.tabCategory}>Room Tips</span>
      </div>
    </div>
  );
};

TabSwitcher.propTypes = {
  update: PropTypes.func.isRequired,
};

export default TabSwitcher;
