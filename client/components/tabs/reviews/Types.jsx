import React from 'react';

import TypeRow from './TypeRow';

const fakeData = ['Families', 'Couples', 'Solo', 'Business', 'Friends'];

const Types = () => (
  <div>
    {fakeData.map(type => (
      <TypeRow type={type} />
    ))}
  </div>
);

export default Types;
