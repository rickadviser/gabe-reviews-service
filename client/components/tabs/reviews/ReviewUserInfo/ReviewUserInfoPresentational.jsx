import React from 'react';
import PropTypes from 'prop-types';

import ReviewButton from '../ReviewButton/index';
import userPropTypes from '../../../../proptypes/users';

import {
  review__userInfo__avatar,
  review__userInfo__wrapper,
  review__extrasPopup__wrapper,
  review__userInfo__extras__wrapper,
  review__userInfo__username,
  review__userInfo__subInfo,
  review__userInfo__contributions,
  review__userInfo__popup,
} from './reviewUserInfo.scss';

import { review__inner__wrapper } from '../review.scss';

const ReviewUserInfoPresentational = ({
  user,
  reviewPhrase,
  formattedDate,
  toggleExtras,
  extrasPopup,
}) => (
  <div className={`${review__inner__wrapper} ${review__userInfo__wrapper}`}>
    <div>
      <img
        src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png"
        alt="User Avatar"
        className={review__userInfo__avatar}
      />
    </div>
    <div>
      <div>
        <a href="http://www.google.com" className={review__userInfo__username}>
          {user.username}
        </a>
        <span>{` ${reviewPhrase} ${formattedDate}`}</span>
      </div>
      <div className={review__userInfo__subInfo}>
        <span>{`${user.location && user.location.city}, `}</span>
        <span>{user.location && user.location.state}</span>
        <span className={review__userInfo__contributions}>
          {` ⁃ ${user.contributions} `}
        </span>
        <span>contributions</span>
        <span className={review__userInfo__contributions}>
          {` ⁃ ${user.helpful_votes} `}
        </span>
        <span>helpful votes</span>
      </div>
    </div>
    <div className={review__userInfo__extras__wrapper}>
      <ReviewButton icon="user-plus" text="Follow" />
      <ReviewButton icon="ellipsis-h" text="" onClick={toggleExtras} />
      {extrasPopup && (
        <div id="extras_popup_wrapper" className={review__extrasPopup__wrapper}>
          <ul id="extras_popup_ul" className={review__userInfo__popup}>
            <li id="extras_popup_li">
              <a href="http://www.google.com">Report this</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  </div>
);

ReviewUserInfoPresentational.propTypes = {
  user: userPropTypes.isRequired,
  reviewPhrase: PropTypes.string.isRequired,
  formattedDate: PropTypes.string.isRequired,
  toggleExtras: PropTypes.func.isRequired,
  extrasPopup: PropTypes.bool.isRequired,
};

export default ReviewUserInfoPresentational;
