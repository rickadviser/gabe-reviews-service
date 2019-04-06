// eslint-disable-next-line arrow-body-style
const getFilteredPtotos = (photos, category = 'All') => {
  return category !== 'All'
    ? photos.filter(i => i.category === category)
    : photos;
};

export default getFilteredPtotos;
