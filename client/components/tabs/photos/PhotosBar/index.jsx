import React, { useContext } from 'react';
import HotelContext from '../../../../context/hotel-context';

import PhotosBarPresentational from './PhotosBarPresentational';

const PhotosBar = () => {
  const { photos } = useContext(HotelContext);

  const categories = Array.from(
    photos.reduce((acc, item) => acc.add(item.category), new Set())
  );

  return <PhotosBarPresentational categories={categories} />;
};

export default PhotosBar;
