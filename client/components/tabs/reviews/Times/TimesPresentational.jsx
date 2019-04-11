import React from 'react';
import PropTypes from 'prop-types';

import TimeRow from '../TimeRow/index';
import { reviews__subheader } from '../review.scss';

const TimesPresentational = ({ data }) => (
  <>
    <h4 className={reviews__subheader}>Time of year</h4>
    <div>
      {data.map(({ start, end }) => (
        <TimeRow key={start} start={start} end={end} />
      ))}
    </div>
  </>
);

TimesPresentational.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default TimesPresentational;
