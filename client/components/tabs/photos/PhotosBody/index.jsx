import React, { useContext } from 'react';

import PhotosBodyPresentational from './PhotosBodyPresentational';
import PhotosContext from '../context/PhotosContext';
import HotelContext from '../../../../context/hotel-context';
import getFilteredPhotos from './getFilteredPhotos';

const PhotosBody = () => {
  const { photos } = useContext(HotelContext);
  const { selectedCategory } = useContext(PhotosContext);
  const filtered = getFilteredPhotos(photos, selectedCategory);

  return <PhotosBodyPresentational filtered={filtered} />;
};

export default PhotosBody;
