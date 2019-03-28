import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './components/css/main.css';

import TabSwitcher from './components/TabSwitcher.jsx';
import TabLoader from './components/TabLoader.jsx';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCamera,
  faEdit,
  faComments,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
library.add(faCamera);
library.add(faEdit);
library.add(faComments);
library.add(faLightbulb);

class App extends Component {
  state = {
    currentTab: 0,
  };

  constructor(props) {
    super(props);
    this.updateTab = this.updateTab.bind(this);
  }

  updateTab(tab) {
    this.setState({ currentTab: tab });
  }

  render() {
    const { currentTab } = this.state;
    return (
      <div className={styles.mainWrapper}>
        <TabSwitcher update={this.updateTab} />
        <TabLoader tab={currentTab} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
