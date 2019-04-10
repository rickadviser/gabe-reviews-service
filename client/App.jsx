import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import StickyNav from './components/StickyNav/index';
import GlobalState from './context/GlobalState';
import TabSwitcher from './components/TabSwitcher/index';
import TabLoader from './components/TabLoader/index';
import './helpers/loadIcons';

import styles from './components/css/main.scss';

const { main__wrapper } = styles;

const App = ({ hotelId }) => {
  const [currentTab, setCurrentTab] = useState('Reviews');
  const [sticky, setSticky] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState('Review');

  const showStickyNav = () => {
    setSticky(window.pageYOffset > 200);
  };

  const setActive = (e, tab) => {
    e.preventDefault();
    setActiveNavTab(tab);
  };

  useEffect(() => {
    window.addEventListener('scroll', showStickyNav);
    return function removeScroll() {
      window.removeEventListener('scroll', showStickyNav);
    };
  }, []);

  return (
    <GlobalState hotelId={hotelId}>
      {sticky && (
        <StickyNav activeNavTab={activeNavTab} setActive={setActive} />
      )}
      <div className={main__wrapper}>
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
