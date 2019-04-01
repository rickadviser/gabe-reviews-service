import React, { useState } from 'react';

import LanguageRow from './LanguageRow';

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
  const [checked, setChecked] = useState(false);

  const selectRadio = e => setChecked(e.target.value);
  return (
    <form>
      <LanguageRow
        checked={checked}
        languageData={totalData}
        selectRadio={selectRadio}
      />
      {fakeData.map(language => (
        <LanguageRow
          checked={checked}
          languageData={language}
          selectRadio={selectRadio}
        />
      ))}
    </form>
  );
};

export default Languages;
