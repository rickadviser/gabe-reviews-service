import React, { useState } from 'react';
import formatDate from 'dateformat';

import reviewPropTypes from '../../../../proptypes/review';
import getReviewDescription from './getReviewDescription';
import getTripType from './getTripType';

import ReviewContentPresentational from './ReviewContentPresentational';

const ReviewContent = ({ review }) => {
  const { title, description, ratings } = review;

  const [more, setMore] = useState(false);

  const toggleMore = e => {
    e.preventDefault();
    setMore(!more);
  };

  const formattedDate = formatDate(review.date, 'mmm yyyy');
  const trimmedDescription = getReviewDescription(description, more);
  const tripType = getTripType(review.traveler_type);

  return (
    <ReviewContentPresentational
      title={title}
      ratings={ratings}
      toggleMore={toggleMore}
      formattedDate={formattedDate}
      trimmedDescription={trimmedDescription}
      tripType={tripType}
      more={more}
      review={review}
    />
  );
};

ReviewContent.propTypes = {
  review: reviewPropTypes.isRequired,
};

export default ReviewContent;
