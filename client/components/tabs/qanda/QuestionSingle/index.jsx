import React from 'react';

import ReviewUserInfo from '../../reviews/ReviewUserInfo/index';
import QuestionAnswers from '../QuestionAnswers/index';
import NewAnswer from '../NewAnswer/index';

import {
  question__single__wrapper,
  question__single__description,
} from './questionSingle.scss';

import questionPropTypes from '../../../../proptypes/question';

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
    <NewAnswer />
  </div>
);

QuestionSingle.propTypes = {
  question: questionPropTypes.isRequired,
};

export default QuestionSingle;
