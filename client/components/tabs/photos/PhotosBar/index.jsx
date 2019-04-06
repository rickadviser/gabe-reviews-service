import React, { useContext } from 'react';
import HotelContext from '../../../../context/hotel-context';

import PhotoCategory from '../PhotoCategory/index';

import { photosBar__wrapper } from './photosBar.scss';

const PhotosBar = () => {
  const { photos } = useContext(HotelContext);

  const categories = Array.from(
    photos.reduce((acc, item) => acc.add(item.category), new Set())
  );

  return (
    <div className={photosBar__wrapper}>
      <h5>Album Categories</h5>
      <ul>
        <li>
          <PhotoCategory category="All" />
        </li>
        {categories.map(category => (
          <li key={category}>
            <PhotoCategory category={category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotosBar;
