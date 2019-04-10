import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Main from './Main/index';
import StickyNav from './StickyNav/index';

import '../helpers/loadIcons';

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
    <>
      {sticky && (
        <StickyNav activeNavTab={activeNavTab} setActive={setActive} />
      )}
      <Main
        hotelId={hotelId}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    </>
  );
};

App.propTypes = {
  hotelId: PropTypes.string.isRequired,
};

ReactDOM.render(
  <App hotelId="5cae2d24099a2f630657e514" />,
  document.getElementById('root')
);

export default App;
