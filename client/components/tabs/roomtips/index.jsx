import React from 'react';

import TabHeader from '../../TabHeader';
import BodyWrapper from '../BodyWrapper';
import RoomtipsState from './RoomtipsState';
import RoomtipsBody from './RoomtipsBody/index';

import { upper__wrapper } from '../../css/main.scss';

const RoomTips = () => (
  <RoomtipsState>
    <div className={upper__wrapper}>
      <TabHeader title="Room Tips" buttonText="Finish Your Review" />
    </div>
    <div>
      <BodyWrapper>
        <RoomtipsBody />
      </BodyWrapper>
    </div>
  </RoomtipsState>
);

export default RoomTips;
