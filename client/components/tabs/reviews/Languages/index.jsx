import React, { useState, useContext } from 'react';

import LanguagesPresentational from './LanguagesPresentational';
import HotelContext from '../../../../context/hotel-context';
import ReviewsContext from '../context/reviews-context';

import { getLanguages, getTotalLaguages } from './getLanguages';

const Languages = () => {
  const [checked, setChecked] = useState('English');
  const { reviews } = useContext(HotelContext);
  const { setLanguage } = useContext(ReviewsContext);

  const languageData = getLanguages(reviews);
  const totalData = getTotalLaguages(reviews);

  const selectRadio = e => {
    setChecked(e.target.value);
    setLanguage(e.target.value);
  };

  return (
    <LanguagesPresentational
      checked={checked}
      selectRadio={selectRadio}
      languageData={languageData}
      totalData={totalData}
    />
  );
};

export default Languages;
