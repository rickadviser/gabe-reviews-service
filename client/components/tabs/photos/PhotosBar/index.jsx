import React, { useContext } from 'react';
import PhotosContext from '../context/PhotosContext';
import HotelContext from '../../../../context/hotel-context';

import { photosBar__wrapper, photosBar__category } from './photosBar.scss';

const PhotosBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(PhotosContext);
  const { photos } = useContext(HotelContext);

  const categories = Array.from(
    photos.reduce((acc, item) => acc.add(item.category), new Set())
  );

  return (
    <div className={photosBar__wrapper}>
      <h5>Album Categories</h5>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <button
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`${photosBar__category} ${
                selectedCategory === category ? photosBar__category : ''
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotosBar;
