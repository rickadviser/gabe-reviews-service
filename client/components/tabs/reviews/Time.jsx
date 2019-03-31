import React from 'react';
import PropTypes from 'prop-types';

import TimeRange from './TimeRange';

const calcMonth = target => {
  const current = new Date().getMonth();
  const newMonth = current + target;
  return newMonth > 11 ? newMonth - 12 : newMonth;
};

const Time = () => {
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
        <TimeRange start={start} end={end} />
      ))}
    </div>
  );
};

Time.propTypes = {};

export default Time;
