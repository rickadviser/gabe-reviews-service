import React from 'react';
import PropTypes from 'prop-types';
import formatDate from 'dateformat';

import answerPropTypes from '../../../../proptypes/answer';

import QuestionAnswerPresentational from './QuestionAnswerPresentational';

const QuestionAnswer = ({ answer, more, setMore }) => {
  const formattedDate = formatDate(answer.date, 'mmm yyyy');

  const toggleMore = e => {
    e.preventDefault();
    setMore(!more);
  };

  return (
    <QuestionAnswerPresentational
      formattedDate={formattedDate}
      toggleMore={toggleMore}
      answer={answer}
      more={more}
    />
  );
};

QuestionAnswer.propTypes = {
  answer: answerPropTypes.isRequired,
  more: PropTypes.bool.isRequired,
  setMore: PropTypes.func.isRequired,
};

export default QuestionAnswer;
