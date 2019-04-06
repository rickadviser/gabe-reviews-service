import React from 'react';

import PhotosState from './context/PhotosState';
import PhotosBody from './PhotosBody/index.jsx';
import PhotosBar from './PhotosBar/index.jsx';
import TabHeader from '../../TabHeader';
import BodyWrapper from '../BodyWrapper';

import { upper__wrapper } from '../../css/main.scss';

const Photos = () => (
  <PhotosState>
    <div className={upper__wrapper}>
      <TabHeader title="Photos" buttonText="Post a Photo" />
      <div>
        <PhotosBar />
      </div>
    </div>
    <div>
      <BodyWrapper>
        <PhotosBody />
      </BodyWrapper>
    </div>
  </PhotosState>
);

export default Photos;
