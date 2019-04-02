/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCamera,
  faEdit,
  faComments,
  faLightbulb,
  faSearch,
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
library.add(faSearch);

const App = ({ hotelId }) => {
  const [currentTab, setCurrentTab] = useState('Reviews');

  return (
    <GlobalState hotelId={hotelId}>
      <div className={mainWrapper}>
        <TabSwitcher update={setCurrentTab} />
        <TabLoader tab={currentTab} />
      </div>
    </GlobalState>
  );
};

App.propTypes = {
  hotelId: PropTypes.string.isRequired,
};

// ReactDOM.render(
//   <App hotelId="5c9e595002944324d1f20679" />,
//   document.getElementById('root')
// );

export default App;
