const getTripType = type => {
  switch (type) {
    case 'Families':
      return 'Traveled with family';
    case 'Couples':
      return 'Traveled as a couple';
    case 'Solo':
      return 'Traveled solo';
    case 'Friends':
      return 'Traveled with friends';
    case 'Business':
      return 'Traveled on business';
    default:
      return '';
  }
};

export default getTripType;
