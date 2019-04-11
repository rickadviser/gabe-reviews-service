import React from 'react';
import PropTypes from 'prop-types';

import {
  answer__outer__wrapper,
  answer__wrapper,
  answer__avatar,
  answer__description,
  answer__answer,
  answer__username,
  answer__userInfo,
  answer__date,
  answer__seeAll,
  answer__date__stars,
} from './questionAnswer.scss';

import answerPropTypes from '../../../../proptypes/answer';

const QuestionAnswerPresentational = ({
  answer,
  formattedDate,
  toggleMore,
}) => (
  <div className={answer__outer__wrapper}>
    <div className={answer__wrapper}>
      <div>
        <img
          src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png"
          alt="User Avatar"
          className={answer__avatar}
        />
      </div>
      <div className={answer__description}>
        <div className={answer__userInfo}>
          <span>Answer from </span>
          <a href="http://www.google.com" className={answer__username}>
            {answer.user_id && answer.user_id.username}
          </a>
        </div>
        <div className={answer__date}>
          <span>{formattedDate}</span>
          <span>
            <span> | </span>
            <span className={answer__date__stars}>***</span>
          </span>
        </div>
        <div>
          <span className={answer__answer}>{answer.answer}</span>
        </div>
      </div>
    </div>
    <div>
      <a
        href="http://www.google.com"
        className={answer__seeAll}
        onClick={toggleMore}
      >
        See all answers
      </a>
    </div>
  </div>
);

QuestionAnswerPresentational.propTypes = {
  formattedDate: PropTypes.string.isRequired,
  toggleMore: PropTypes.func.isRequired,
  answer: answerPropTypes.isRequired,
};

export default QuestionAnswerPresentational;
