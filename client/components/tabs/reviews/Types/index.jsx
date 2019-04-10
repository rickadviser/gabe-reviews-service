import React, { useContext } from 'react';

import TypesPresentational from './TypesPresentational';
import HotelContext from '../../../../context/hotel-context';
import getTravelerTypes from './getTravelerTypes';

const Types = () => {
  const { reviews } = useContext(HotelContext);
  const travelerTypes = getTravelerTypes(reviews);
  return <TypesPresentational travelerTypes={travelerTypes} />;
};

export default Types;
