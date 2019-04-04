import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import ReviewButton from './ReviewButton';

import userPropTypes from '../../../proptypes/users';

import {
  review__avatar,
  review__inner__wrapper,
  review__userInfo__wrapper,
  review__extrasPopup__wrapper,
  review__userInfo__extras__wrapper,
  review__userInfo__username,
  review__userInfo__subInfo,
  review__userInfo__contributions,
  review__popup,
} from './css/review.scss';

const ReviewUserInfo = ({ user, date }) => {
  const formattedDate = dateFormat(date, 'mmm yyyy');
  const [extrasPopup, setExtrasPopup] = useState(false);
  const toggleExtras = () => setExtrasPopup(!extrasPopup);

  return (
    <div className={`${review__inner__wrapper} ${review__userInfo__wrapper}`}>
      <div>
        <img
          src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png"
          alt="User Avatar"
          className={review__avatar}
        />
      </div>
      <div>
        <div>
          <span className={review__userInfo__username}>{user.username}</span>
          <span>{` wrote a review ${formattedDate}`}</span>
        </div>
        <div className={review__userInfo__subInfo}>
          <span>{`${user.location && user.location.city}, `}</span>
          <span>{user.location && user.location.state}</span>
          <span className={review__userInfo__contributions}>{` - ${
            user.contributions
          } `}</span>
          <span>contributions</span>
        </div>
      </div>
      <div className={review__userInfo__extras__wrapper}>
        {/* put share button here */}
        <ReviewButton icon="user-plus" text="Follow" />
        <ReviewButton icon="ellipsis-h" text="" onClick={toggleExtras} />
        {extrasPopup && (
          <div className={review__extrasPopup__wrapper}>
            <ul className={review__popup}>
              <li>
                <a href="http://www.google.com">Report this</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

ReviewUserInfo.propTypes = {
  user: userPropTypes.isRequired,
  date: PropTypes.string.isRequired,
};

export default ReviewUserInfo;
