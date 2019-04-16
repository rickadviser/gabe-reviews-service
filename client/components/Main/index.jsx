import React, { useState, useEffect } from 'react';
import MainPresentational from './MainPresentational';
import StickyNav from '../StickyNav/index';

import '../../helpers/loadIcons';

import { reviews__component__wrapper } from '../css/main.scss';

const Main = () => {
  const [currentTab, setCurrentTab] = useState('Reviews');
  const [sticky, setSticky] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState('Pricing');

  const showStickyNav = () => {
    setSticky(window.pageYOffset > 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', showStickyNav);
    return function removeScroll() {
      window.removeEventListener('scroll', showStickyNav);
    };
  }, []);

  return (
    <div className={reviews__component__wrapper}>
      {sticky && (
        <StickyNav
          activeNavTab={activeNavTab}
          setActiveNavTab={setActiveNavTab}
        />
      )}
      <MainPresentational
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    </div>
  );
};

export default Main;
