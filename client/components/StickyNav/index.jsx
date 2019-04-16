import React from 'react';
import PropTypes from 'prop-types';

import { main__stickyNav, main__stickyNav__selected } from './stickyNav.scss';

const StickyNav = ({ setActiveNavTab, activeNavTab }) => (
  <nav className={main__stickyNav}>
    <ul>
      <li>
        {activeNavTab !== 'Pricing' && (
          <a href="#Pricing" onClick={() => setActiveNavTab('Pricing')}>
            Pricing
          </a>
        )}
        {activeNavTab === 'Pricing' && (
          <span className={main__stickyNav__selected}>Pricing</span>
        )}
      </li>
      <li>
        {activeNavTab !== 'About' && (
          <a href="#about" onClick={() => setActiveNavTab('About')}>
            About
          </a>
        )}
        {activeNavTab === 'About' && (
          <span className={main__stickyNav__selected}>About</span>
        )}
      </li>
      <li>
        {activeNavTab !== 'Location' && (
          <a href="#location" onClick={() => setActiveNavTab('Location')}>
            Location
          </a>
        )}
        {activeNavTab === 'Location' && (
          <span className={main__stickyNav__selected}>Location</span>
        )}
      </li>
      <li>
        {activeNavTab !== 'Reviews' && (
          <a href="#reviews" onClick={() => setActiveNavTab('Reviews')}>
            Reviews
          </a>
        )}
        {activeNavTab === 'Reviews' && (
          <span className={main__stickyNav__selected}>Reviews</span>
        )}
      </li>
    </ul>
  </nav>
);

StickyNav.propTypes = {
  setActiveNavTab: PropTypes.func.isRequired,
  activeNavTab: PropTypes.string.isRequired,
};

export default StickyNav;
