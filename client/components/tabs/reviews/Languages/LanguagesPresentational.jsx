import React from 'react';
import PropTypes from 'prop-types';

import LanguageRow from '../LanguageRow/index';
import { reviews__subheader } from '../review.scss';

const LanguagesPresentational = ({
  checked,
  totalData,
  selectRadio,
  languageData,
}) => (
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

LanguagesPresentational.propTypes = {
  checked: PropTypes.string.isRequired,
  totalData: PropTypes.shape({
    language: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  selectRadio: PropTypes.func.isRequired,
  languageData: PropTypes.arrayOf(
    PropTypes.shape({
      language: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default LanguagesPresentational;
