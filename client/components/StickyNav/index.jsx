import React from 'react';
import PropTypes from 'prop-types';

import { main__stickyNav, main__stickyNav__selected } from './stickyNav.scss';

const StickyNav = ({ setActive, activeNavTab }) => (
  <nav className={main__stickyNav}>
    <ul>
      <li>
        {activeNavTab !== 'Review' && (
          <a href="http://www.google.com" onClick={e => setActive(e, 'Review')}>
            Review
          </a>
        )}
        {activeNavTab === 'Review' && (
          <span className={main__stickyNav__selected}>Review</span>
        )}
      </li>
      <li>
        {activeNavTab !== 'Location' && (
          <a
            href="http://www.google.com"
            onClick={e => setActive(e, 'Location')}
          >
            Location
          </a>
        )}
        {activeNavTab === 'Location' && (
          <span className={main__stickyNav__selected}>Location</span>
        )}
      </li>
      <li>
        {activeNavTab !== 'Deals' && (
          <a href="http://www.google.com" onClick={e => setActive(e, 'Deals')}>
            Deals
          </a>
        )}
        {activeNavTab === 'Deals' && (
          <span className={main__stickyNav__selected}>Deals</span>
        )}
      </li>
    </ul>
  </nav>
);

StickyNav.propTypes = {
  setActive: PropTypes.func.isRequired,
  activeNavTab: PropTypes.string.isRequired,
};

export default StickyNav;
