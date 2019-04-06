/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import GlobalState from './context/GlobalState';
import TabSwitcher from './components/TabSwitcher.jsx';
import TabLoader from './components/TabLoader.jsx';
import './helpers/loadIcons';

import styles from './components/css/main.scss';

const { mainWrapper } = styles;

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

ReactDOM.render(
  <App hotelId="5ca68a56cb85a6716054a7d8" />,
  document.getElementById('root')
);

export default App;
