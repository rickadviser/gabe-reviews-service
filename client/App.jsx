/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCamera,
  faEdit,
  faComments,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

import GlobalState from './context/GlobalState';
import TabSwitcher from './components/TabSwitcher.jsx';
import TabLoader from './components/TabLoader.jsx';

import styles from './components/css/main.scss';

const { mainWrapper } = styles;

library.add(faCamera);
library.add(faEdit);
library.add(faComments);
library.add(faLightbulb);

const App = () => {
  const [currentTab, setCurrentTab] = useState('Reviews');

  return (
    <GlobalState hotelId="5c9e595002944324d1f20679">
      <div id="mainWrapper" className={mainWrapper}>
        <TabSwitcher update={setCurrentTab} />
        <TabLoader tab={currentTab} />
      </div>
    </GlobalState>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
