import getFilteredReviews from '../../helpers/filteredReviews';

describe('Filtered Reviews helper', () => {
  const reviews = [
    {
      date: new Date('11/12/2018'),
      language: 'English',
      traveler_type: 'Solo',
      ratings: {
        overall: 3,
      },
    },
    {
      date: new Date('1/17/2019'),
      language: 'English',
      traveler_type: 'Families',
      ratings: {
        overall: 2,
      },
    },
    {
      date: new Date('2/22/2019'),
      language: 'Italian',
      traveler_type: 'Couples',
      ratings: {
        overall: 5,
      },
    },
    {
      date: new Date('3/12/2019'),
      language: 'Chinese',
      traveler_type: 'Business',
      ratings: {
        overall: 1,
      },
    },
    {
      date: new Date('4/1/2019'),
      language: 'Italian',
      traveler_type: 'Friends',
      ratings: {
        overall: 4,
      },
    },
    {
      date: new Date('5/11/2018'),
      language: 'Chinese',
      traveler_type: 'Business',
      ratings: {
        overall: 2,
      },
    },
    {
      date: new Date('6/1/2018'),
      language: 'English',
      traveler_type: 'Families',
      ratings: {
        overall: 5,
      },
    },
    {
      date: new Date('7/1/2018'),
      language: 'Italian',
      traveler_type: 'Couples',
      ratings: {
        overall: 1,
      },
    },
    {
      date: new Date('8/1/2018'),
      language: 'Chinese',
      traveler_type: 'Solo',
      ratings: {
        overall: 3,
      },
    },
    {
      date: new Date('9/19/2018'),
      language: 'English',
      traveler_type: 'Friends',
      ratings: {
        overall: 2,
      },
    },
    {
      date: new Date('10/30/2018'),
      language: 'English',
      traveler_type: 'Business',
      ratings: {
        overall: 4,
      },
    },
    {
      date: new Date('12/8/2018'),
      language: 'Italian',
      traveler_type: 'Solo',
      ratings: {
        overall: 5,
      },
    },
  ];

  let filtered;
  let filtered2;

  describe('existance and structure', () => {
    it('should exist ', () => {
      expect(getFilteredReviews).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof getFilteredReviews === 'function').toBeTruthy();
    });

    it('should return an array', () => {
      filtered = getFilteredReviews();
      expect(filtered).toBeInstanceOf(Array);
    });
  });

  describe('filtering capabilities', () => {
    it('should return input array with no filters', () => {
      filtered = getFilteredReviews(reviews);
      expect(filtered).toStrictEqual(reviews);
    });

    it('should return all input array elements with no filters', () => {
      filtered = getFilteredReviews(reviews);
      expect(filtered).toHaveLength(reviews.length);
    });

    it('should return the currect reviews by rating filter', () => {
      filtered = getFilteredReviews(reviews, [1]);
      filtered2 = getFilteredReviews(reviews, [1, 2, 3]);
      expect(filtered).toHaveLength(2);
      expect(filtered2).toHaveLength(7);
    });

    it('should return the correct reviews by date filter', () => {
      filtered = getFilteredReviews(reviews, [], ['0 - 2']);
      filtered2 = getFilteredReviews(reviews, [], ['6 - 11']);
      expect(filtered).toHaveLength(3);
      expect(filtered2).toHaveLength(6);
    });

    it('should return the correct reviews by type filter', () => {
      filtered = getFilteredReviews(reviews, [], [], ['Solo']);
      filtered2 = getFilteredReviews(
        reviews,
        [],
        [],
        ['Couples', 'Families', 'Business']
      );
      expect(filtered).toHaveLength(3);
      expect(filtered2).toHaveLength(7);
    });

    it('should return the correct reviews by language filter', () => {
      filtered = getFilteredReviews(reviews, [], [], [], 'English');
      filtered2 = getFilteredReviews(reviews, [], [], [], 'Italian');
      expect(filtered).toHaveLength(5);
      expect(filtered2).toHaveLength(4);
    });

    it('should return the correct reviews by mixed filter', () => {
      filtered = getFilteredReviews(
        reviews,
        [2, 3, 4],
        ['0 - 5'],
        ['Business', 'Families'],
        'English'
      );
      expect(filtered).toHaveLength(1);
    });
  });
});

/* reviews: [{}, {}, ...],
 * ratings: [1, 2, ...]
 * dates: ['1 - 3', ...],
 * types: ['Solo', 'Families', 'Business', 'Friends', 'Couples'],
 * language: 'All' | 'English' | 'Chinese' | 'Italian'
 */
