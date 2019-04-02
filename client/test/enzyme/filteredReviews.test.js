import getFilteredReviews from '../../helpers/filteredReviews';

describe('getFilteredReviews', () => {
  const reviews = [
    {
      date: new Date('11/12/2018'),
      title: '',
      description: '',
      language: 'English',
      traveler_type: 'Solo',
      ratings: {
        overall: 3,
      },
    },
    {
      date: new Date('1/17/2019'),
      title: '',
      description: '',
      language: 'English',
      traveler_type: 'Families',
      ratings: {
        overall: 2,
      },
    },
    {
      date: new Date('2/22/2019'),
      title: '',
      description: '',
      language: 'Italian',
      traveler_type: 'Couples',
      ratings: {
        overall: 5,
      },
    },
    {
      date: new Date('3/12/2019'),
      title: '',
      description: '',
      language: 'Chinese',
      traveler_type: 'Business',
      ratings: {
        overall: 1,
      },
    },
    {
      date: new Date('4/1/2019'),
      title: '',
      description: '',
      language: 'Italian',
      traveler_type: 'Friends',
      ratings: {
        overall: 4,
      },
    },
    {
      date: new Date('5/11/2018'),
      title: '',
      description: '',
      language: 'Chinese',
      traveler_type: 'Business',
      ratings: {
        overall: 2,
      },
    },
    {
      date: new Date('6/1/2018'),
      title: '',
      description: '',
      language: 'English',
      traveler_type: 'Families',
      ratings: {
        overall: 5,
      },
    },
    {
      date: new Date('7/1/2018'),
      title: 'bonzai',
      description: '',
      language: 'Italian',
      traveler_type: 'Couples',
      ratings: {
        overall: 1,
      },
    },
    {
      date: new Date('8/1/2018'),
      title: '',
      description: '',
      language: 'Chinese',
      traveler_type: 'Solo',
      ratings: {
        overall: 3,
      },
    },
    {
      date: new Date('9/19/2018'),
      title: '',
      description: '',
      language: 'English',
      traveler_type: 'Friends',
      ratings: {
        overall: 2,
      },
    },
    {
      date: new Date('10/30/2018'),
      title: '',
      description: '',
      language: 'English',
      traveler_type: 'Business',
      ratings: {
        overall: 4,
      },
    },
    {
      date: new Date('12/8/2018'),
      title: 'YAHOO',
      description: '',
      language: 'Italian',
      traveler_type: 'Solo',
      ratings: {
        overall: 5,
      },
    },
  ];

  let filtered;
  let filtered2;

  describe('Existance and structure', () => {
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

  describe('Filtering', () => {
    it('should return input array with no filters', () => {
      filtered = getFilteredReviews(reviews);
      expect(filtered).toStrictEqual(reviews);
    });

    it('should return all input array elements with no filters', () => {
      filtered = getFilteredReviews(reviews);
      expect(filtered).toHaveLength(reviews.length);
    });

    it('should correctly filter by rating', () => {
      filtered = getFilteredReviews(reviews, [1]);
      filtered2 = getFilteredReviews(reviews, [1, 2, 3]);
      expect(filtered).toHaveLength(2);
      expect(filtered2).toHaveLength(7);
    });

    it('should correctly filter by date', () => {
      filtered = getFilteredReviews(reviews, [], ['0 - 2']);
      filtered2 = getFilteredReviews(reviews, [], ['6 - 11']);
      expect(filtered).toHaveLength(3);
      expect(filtered2).toHaveLength(6);
    });

    it('should correctly filter by type', () => {
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

    it('should correctly filter by language', () => {
      filtered = getFilteredReviews(reviews, [], [], [], 'English');
      filtered2 = getFilteredReviews(reviews, [], [], [], 'Italian');
      expect(filtered).toHaveLength(5);
      expect(filtered2).toHaveLength(4);
    });

    it('should correctly filter by multiple categories', () => {
      filtered = getFilteredReviews(
        reviews,
        [2, 3, 4],
        ['0 - 5'],
        ['Business', 'Families'],
        'English'
      );
      expect(filtered).toHaveLength(1);
    });

    it('should correctly filter by search term', () => {
      filtered = getFilteredReviews(reviews, [], [], [], '', 'YAHoO');
      filtered2 = getFilteredReviews(reviews, [], [], [], '', 'bonza');
      expect(filtered).toHaveLength(1);
      expect(filtered2).toHaveLength(1);
    });
  });
});

/* reviews: [{}, {}, ...],
 * ratings: [1, 2, ...]
 * dates: ['1 - 3', ...],
 * types: ['Solo', 'Families', 'Business', 'Friends', 'Couples'],
 * language: 'All' | 'English' | 'Chinese' | 'Italian'
 */
