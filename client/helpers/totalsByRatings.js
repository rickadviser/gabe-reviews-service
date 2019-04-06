const ratingSystem = ['Terrible', 'Poor', 'Average', 'Good', 'Excellent'];

const getSubTotalsByRatings = reviews =>
  reviews
    .reduce((acc, { ratings }) => {
      const rating = ratingSystem[ratings.overall - 1];

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

export default getSubTotalsByRatings;
