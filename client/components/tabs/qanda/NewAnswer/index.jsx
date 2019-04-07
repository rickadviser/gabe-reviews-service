import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  answer__writeNew,
  answer__search,
  answer__search__icon__wrapper,
  answer__search__icon,
} from './newAnswer.scss';

const NewAnswer = () => {
  const [search, setSearch] = useState('');
  return (
    <div className={answer__writeNew}>
      <div className={answer__search__icon__wrapper}>
        <FontAwesomeIcon
          icon="user"
          size="md"
          color="#5da880"
          className={answer__search__icon}
        />
      </div>
      <input
        type="text"
        name="seach"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className={answer__search}
        placeholder="Answer question..."
      />
    </div>
  );
};

export default NewAnswer;
