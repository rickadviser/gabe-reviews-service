import React, { Component } from 'react';
import styles from './css/tabSwitcher.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
console.log(FontAwesomeIcon);
class TabSwitcher extends Component {
  state = {
    selected: 'reviews',
  };

  constructor(props) {
    super(props);
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(e, tab) {
    this.props.update(tab);
    this.setState({ selected: tab });
  }

  render() {
    return (
      <div className={styles.tabswitch__wrapper}>
        <div
          className={`${styles.tabswitch__tab} ${
            this.state.selected === 'reviews' ? styles.active : ''
          }`}
          onClick={e => this.selectTab(e, 'reviews')}
        >
          <FontAwesomeIcon icon="edit" size="lg" />
          <span className={styles.tabNumbers}>1,200</span>
          <span className={styles.tabCategory}>Reviews</span>
        </div>
        <div
          className={`${styles.tabswitch__tab} ${
            this.state.selected === 'photos' ? styles.active : ''
          }`}
          onClick={e => this.selectTab(e, 'photos')}
        >
          <FontAwesomeIcon icon="camera" size="lg" />
          <span className={styles.tabNumbers}>1,455</span>
          <span className={styles.tabCategory}>Photos</span>
        </div>
        <div
          className={`${styles.tabswitch__tab} ${
            this.state.selected === 'qa' ? styles.active : ''
          }`}
          onClick={e => this.selectTab(e, 'qa')}
        >
          <FontAwesomeIcon icon="comments" size="lg" />
          <span className={styles.tabNumbers}>745</span>
          <span className={styles.tabCategory}>Q {'&'} A</span>
        </div>
        <div
          className={`${styles.tabswitch__tab} ${
            this.state.selected === 'room_tips' ? styles.active : ''
          }`}
          onClick={e => this.selectTab(e, 'room_tips')}
        >
          <FontAwesomeIcon icon="lightbulb" size="lg" />
          <span className={styles.tabNumbers}>1,334</span>
          <span className={styles.tabCategory}>Room Tips</span>
        </div>
      </div>
    );
  }
}

export default TabSwitcher;
