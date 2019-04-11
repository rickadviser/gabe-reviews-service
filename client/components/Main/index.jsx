import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MainPresentational from './MainPresentational';
import StickyNav from '../StickyNav/index';

import '../../helpers/loadIcons';

const Main = ({ hotelId }) => {
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
      <MainPresentational
        hotelId={hotelId}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    </>
  );
};

Main.propTypes = {
  hotelId: PropTypes.string.isRequired,
};

export default Main;
