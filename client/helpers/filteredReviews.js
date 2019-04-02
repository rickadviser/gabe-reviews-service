const getFilteredReviews = (
  reviewsList = [],
  ratingsRange = [],
  timesRange = [],
  typesRange = [],
  language = 'all'
) => {
  let filteredReviews = [...reviewsList];

  if (ratingsRange.length) {
    // Only showing reviews with overall ratings matching selected range, not any
    filteredReviews = filteredReviews.filter(({ ratings }) =>
      ratingsRange.includes(ratings.overall)
    );
  }

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

  if (typesRange.length) {
    filteredReviews = filteredReviews.filter(({ traveler_type }) =>
      typesRange.includes(traveler_type)
    );
  }

  if (
    language.toLowerCase() !== 'all' &&
    language.toLowerCase() !== 'all languages'
  ) {
    filteredReviews = filteredReviews.filter(
      review => review.language.toLowerCase() === language.toLowerCase()
    );
  }

  return filteredReviews;
};

export default getFilteredReviews;
