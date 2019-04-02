import React from 'react';

import TimeRow from './TimeRow';

const calcMonth = target => {
  const current = new Date().getMonth();
  const newMonth = current + target;
  return newMonth > 11 ? newMonth - 12 : newMonth;
};

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

  return (
    <div>
      {data.map(({ start, end }) => (
        <TimeRow key={start} start={start} end={end} />
      ))}
    </div>
  );
};

export default Times;
