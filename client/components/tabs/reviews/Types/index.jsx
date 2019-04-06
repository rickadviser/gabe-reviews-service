import React, { useContext } from 'react';

import TypeRow from '../TypeRow/index';
import HotelContext from '../../../../context/hotel-context';

import getTravelerTypes from '../../../../helpers/getTravelerTypes';

import { reviews__subheader } from '../review.scss';

const Types = () => {
  const { reviews } = useContext(HotelContext);
  const travelerTypes = getTravelerTypes(reviews);
  return (
    <>
      <h4 className={reviews__subheader}>Traveler type</h4>
      <div>
        {travelerTypes.map(type => (
          <TypeRow key={type} type={type} />
        ))}
      </div>
    </>
  );
};

export default Types;
