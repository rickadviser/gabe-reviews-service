/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import SkeletonList from './reviews/SkeletonList/index';
import HotelContext from '../../context/hotel-context';

const BodyWrapper = ({ children }) => {
  const { loading } = useContext(HotelContext);
  return (
    <div>
      {loading && (
        <>
          <SkeletonList />
          <SkeletonList />
        </>
      )}
      {children}
    </div>
  );
};

BodyWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BodyWrapper;
