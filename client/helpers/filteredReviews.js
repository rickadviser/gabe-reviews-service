const filterByTerm = (searchTerm, filteredReviews) => {
  const searchTermLower = searchTerm.toLowerCase();

  return filteredReviews.filter(
    review =>
      review.title.toLowerCase().includes(searchTermLower) ||
      review.description.toLowerCase().includes(searchTermLower)
  );
};

const getFilteredReviews = (
  reviewsList = [],
  ratingsRange = [],
  timesRange = [],
  typesRange = [],
  language = 'all',
  mention = 'All reviews',
  searchTerm = ''
) => {
  let filteredReviews = [...reviewsList];

  /* Filter by ratings */
  if (ratingsRange.length) {
    filteredReviews = filteredReviews.filter(({ ratings }) =>
      ratingsRange.includes(ratings.overall)
    );
  }

  /* Filter by date */
  if (timesRange.length) {
    filteredReviews = filteredReviews.filter(review => {
      const dateRanges = timesRange.map(range =>
        range
          .split('-')
          .map(item => item.trim())
          .map(Number)
      );

      const ranges = [];
      dateRanges.forEach(([start, end]) => {
        for (let i = start; i <= end; i++) {
          ranges.push(i);
        }
      });

      const reviewMonth = new Date(review.date).getMonth();
      return ranges.includes(reviewMonth);
    });
  }

  /* Filter by traveler type */
  if (typesRange.length) {
    filteredReviews = filteredReviews.filter(({ traveler_type }) =>
      typesRange.includes(traveler_type)
    );
  }

  /* Filter by language */
  if (
    language &&
    language.toLowerCase() !== 'all' &&
    language.toLowerCase() !== 'all languages'
  ) {
    filteredReviews = filteredReviews.filter(
      review => review.language.toLowerCase() === language.toLowerCase()
    );
  }

  /* Filter by mentions */
  if (mention && mention !== 'All reviews') {
    filteredReviews = filterByTerm(mention, filteredReviews);
  }

  /* Filter by search term */
  if (searchTerm) {
    filteredReviews = filterByTerm(searchTerm, filteredReviews);
  }

  return filteredReviews;
};

export default getFilteredReviews;
