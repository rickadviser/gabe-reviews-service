import React from 'react';
import PropTypes from 'prop-types';

import TypeRow from '../TypeRow/index';
import { reviews__subheader } from '../review.scss';

const TypesPresentational = ({ travelerTypes }) => (
  <>
    <h4 className={reviews__subheader}>Traveler type</h4>
    <div>
      {travelerTypes.map(type => (
        <TypeRow key={type} type={type} />
      ))}
    </div>
  </>
);

TypesPresentational.propTypes = {
  travelerTypes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default TypesPresentational;
