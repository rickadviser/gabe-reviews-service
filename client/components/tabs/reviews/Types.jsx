import React from 'react';

import TypeRow from './TypeRow';

import { reviews__subheader } from './css/review.scss';

const fakeData = ['Families', 'Couples', 'Solo', 'Business', 'Friends'];

const Types = () => (
  <>
    <h4 className={reviews__subheader}>Traveler type</h4>
    <div>
      {fakeData.map(type => (
        <TypeRow key={type} type={type} />
      ))}
    </div>
  </>
);

export default Types;
