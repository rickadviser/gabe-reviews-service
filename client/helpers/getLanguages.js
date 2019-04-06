export const getLanguages = reviews =>
  reviews
    .reduce((acc, { language }) => {
      for (let i = 0; i < acc.length; i++) {
        const lang = acc[i];
        if (lang.language === language) {
          lang.total++;
          return acc;
        }
      }

      return [
        ...acc,
        {
          language,
          total: 1,
        },
      ];
    }, [])
    .sort((a, b) => b.total - a.total);

export const getTotalLaguages = reviews => ({
  language: 'All languages',
  total: reviews.length,
});
