const getReviewTitle = title => {
  const randNum = Math.ceil(Math.random() * 5);
  return title
    .split(' ')
    .slice(0, randNum)
    .map(i => i[0].toUpperCase() + i.slice(1))
    .join(' ');
};

export default getReviewTitle;
