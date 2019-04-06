import React from 'react';
import PropTypes from 'prop-types';

import ReviewUserInfo from '../../reviews/ReviewUserInfo/index';
import QuestionAnswers from '../QuestionAnswers/index';

import {
  question__single__wrapper,
  question__single__description,
} from './questionSingle.scss';

import userPropTypes from '../../../../proptypes/users';

const QuestionSingle = ({ question }) => (
  <div className={question__single__wrapper}>
    <ReviewUserInfo
      user={question.user_id}
      date={question.date}
      type="question"
    />
    <div className={question__single__description}>
      {question.question.slice(0, -1) + '?'}
    </div>
    <QuestionAnswers id={question._id} />
  </div>
);

QuestionSingle.propTypes = {
  question: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hotel_id: PropTypes.string.isRequired,
    user_id: userPropTypes.isRequired,
    question: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuestionSingle;
