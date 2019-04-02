import React, { useState, useContext } from 'react';

import HotelContext from '../../../context/hotel-context';
import ReviewsContext from './context/reviews-context';
import LanguageRow from './LanguageRow';

import { reviews__subheader } from './css/review.scss';
import { getLanguages, getTotalLaguages } from '../../../helpers/getLanguages';

const Languages = () => {
  const [checked, setChecked] = useState('All languages');
  const { reviews } = useContext(HotelContext);
  const { setLanguage } = useContext(ReviewsContext);

  const languageData = getLanguages(reviews);
  const totalData = getTotalLaguages(reviews);

  const selectRadio = e => {
    setChecked(e.target.value);
    setLanguage(e.target.value);
  };
  return (
    <>
      <h4 className={reviews__subheader}>Language</h4>
      <form>
        <LanguageRow
          checked={checked}
          languageData={totalData}
          selectRadio={selectRadio}
        />
        {languageData.map(language => (
          <LanguageRow
            key={language.language}
            checked={checked}
            languageData={language}
            selectRadio={selectRadio}
          />
        ))}
      </form>
    </>
  );
};

export default Languages;
