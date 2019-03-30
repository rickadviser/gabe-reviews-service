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

import TabSwitcher from './components/TabSwitcher.jsx';
import TabLoader from './components/TabLoader.jsx';

import { mainWrapper } from './components/css/main.scss';

library.add(faCamera);
library.add(faEdit);
library.add(faComments);
library.add(faLightbulb);

const App = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className={mainWrapper}>
      <TabSwitcher update={setCurrentTab} />
      <TabLoader tab={currentTab} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
