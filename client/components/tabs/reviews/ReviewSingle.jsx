import React, { useState, useEffect } from 'react';

import reviewPropTypes from '../../../proptypes/review';

import ReviewUserInfo from './ReviewUserInfo';
import ReviewContent from './ReviewContent';
import ReviewLinks from './ReviewLinks';

import { review__single__wrapper } from './css/review.scss';

const ReviewSingle = ({ review }) => {
  const { user_id } = review;
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${user_id}`)
      .then(res => res.json())
      .then(([user]) => {
        setUserInfo(user);
      })
      .catch(console.error);
  }, [user_id]);

  return (
    <div className={review__single__wrapper}>
      <ReviewUserInfo user={userInfo} />
      <ReviewContent review={review} />
      <ReviewLinks review={review} />
    </div>
  );
};

ReviewSingle.propTypes = {
  review: reviewPropTypes.isRequired,
};

export default ReviewSingle;
