import React from 'react';
import PropTypes from 'prop-types';
import userPropTypes from '../../../../proptypes/users';

const QuestionAnswer = ({ answer }) => {
  return (
    <>
      <p>Test</p>
      {JSON.stringify(answer)}
    </>
  );
};

QuestionAnswer.propTypes = {
  answer: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    question_id: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    user_id: userPropTypes.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
};

export default QuestionAnswer;
