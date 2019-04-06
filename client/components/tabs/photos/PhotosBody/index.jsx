import React, { useContext } from 'react';

import PhotosContext from '../context/PhotosContext';
import HotelContext from '../../../../context/hotel-context';
import PhotoReview from '../PhotoReview/index';

import getFilteredPhotos from './getFilteredPhotos';

const PhotosBody = () => {
  const { photos } = useContext(HotelContext);
  const { selectedCategory } = useContext(PhotosContext);

  const filtered = getFilteredPhotos(photos, selectedCategory);

  return (
    <>
      {filtered.map(photo => (
        <PhotoReview key={photo._id} photo={photo} />
      ))}
    </>
  );
};

export default PhotosBody;
