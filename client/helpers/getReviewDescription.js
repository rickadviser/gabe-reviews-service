// eslint-disable-next-line arrow-body-style
const getReviewDescription = (text, more) => {
  return !more ? text.substring(0, 200) + '...' : text;
};

export default getReviewDescription;
