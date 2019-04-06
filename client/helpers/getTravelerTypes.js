const getTravelerTypes = reviews =>
  [...new Set(reviews.map(review => review.traveler_type))].sort((a, b) =>
    a.localeCompare(b)
  );
export default getTravelerTypes;
