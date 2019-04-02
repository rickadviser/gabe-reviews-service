const ratingSystem = [
  'Terrible',
  'Terrible',
  'Poor',
  'Average',
  'Good',
  'Excellent',
];

export const getSubTotalsByRatings = reviews => {
  return reviews
    .reduce((acc, { ratings }) => {
      const rating = ratingSystem[ratings.overall];

      for (let i = 0; i < acc.length; i++) {
        if (acc[i].type === rating) {
          acc[i].total++;
          return acc;
        }
      }

      return [
        ...acc,
        {
          type: rating,
          rating: ratings.overall,
          total: 1,
        },
      ];
    }, [])
    .sort((a, b) => b.rating - a.rating);
};

export const getTotalRatings = ratingsData =>
  ratingsData.reduce((acc, item) => acc + item.total, 0);
