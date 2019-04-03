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
  faTimesCircle,
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
library.add(faTimesCircle);

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
  <App hotelId="5c9e595002944324d1f20679" />,
  document.getElementById('root')
);

export default App;

/*
FontAwesomeIcon.propTypes = {
  border: PropTypes.bool,

  className: PropTypes.string,

  mask: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),

  fixedWidth: PropTypes.bool,

  inverse: PropTypes.bool,

  flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),

  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),

  listItem: PropTypes.bool,

  pull: PropTypes.oneOf(['right', 'left']),

  pulse: PropTypes.bool,

  rotation: PropTypes.oneOf([90, 180, 270]),

  size: PropTypes.oneOf([
    'lg',
    'xs',
    'sm',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x'
  ]),

  spin: PropTypes.bool,

  symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  title: PropTypes.string,

  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

*/
