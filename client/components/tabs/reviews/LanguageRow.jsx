/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import { checkbox__wrapper } from './css/review.scss';

const LanguageRow = ({ languageData, checked, selectRadio }) => {
  const { language, total } = languageData;

  return (
    <div className={checkbox__wrapper}>
      <input
        id={language}
        type="radio"
        name="language"
        value={language}
        checked={checked === language}
        onChange={selectRadio}
      />
      <label htmlFor={language}>{`${language} (${total})`}</label>
    </div>
  );
};

LanguageRow.propTypes = {
  languageData: PropTypes.shape({
    language: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  checked: PropTypes.string.isRequired,
  selectRadio: PropTypes.func.isRequired,
};

export default LanguageRow;
