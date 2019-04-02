import React, { useState, useContext } from 'react';

import ReviewsContext from './context/reviews-context';
import LanguageRow from './LanguageRow';

import { reviews__subheader } from './css/review.scss';

const fakeData = [
  {
    language: 'English',
    total: 122,
  },
  {
    language: 'Chinese',
    total: 33,
  },
  {
    language: 'Italian',
    total: 18,
  },
];

const totalNum = fakeData.reduce((acc, item) => acc + item.total, 0);

const totalData = {
  language: 'All languages',
  total: totalNum,
};

const Languages = () => {
  const [checked, setChecked] = useState('All languages');
  const { setLanguage } = useContext(ReviewsContext);

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
        {fakeData.map(language => (
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
