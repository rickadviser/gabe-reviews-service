import React from 'react';

import TimesPresentational from './TimesPresentational';
import calcMonth from './calcMonth';

const Times = () => {
  const data = [
    {
      start: calcMonth(0),
      end: calcMonth(2),
    },
    {
      start: calcMonth(3),
      end: calcMonth(5),
    },
    {
      start: calcMonth(6),
      end: calcMonth(8),
    },
    {
      start: calcMonth(9),
      end: calcMonth(11),
    },
  ];

  return <TimesPresentational data={data} />;
};

export default Times;
