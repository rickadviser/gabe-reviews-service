/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { emptyList__wrapper } from './emptyList.scss';

const EmptyList = () => (
  <div className={emptyList__wrapper}>
    <span>
      No results found. Try removing a filter, changing your search, or clear
      all to read reviews.
    </span>
  </div>
);

export default EmptyList;
