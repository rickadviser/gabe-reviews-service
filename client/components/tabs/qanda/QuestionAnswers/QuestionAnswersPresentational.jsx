import React from 'react';
import PropTypes from 'prop-types';

import QuestionAnswer from '../QuestionAnswer/index';
import answerPropTypes from '../../../../proptypes/answer';

const QuestionAnswersPresentational = ({
  first,
  seeMore,
  setSeeMore,
  remaining,
}) => (
  <>
    {first && (
      <QuestionAnswer answer={first} more={seeMore} setMore={setSeeMore} />
    )}

    {seeMore &&
      remaining.map(answer => (
        <QuestionAnswer
          key={answer._id}
          answer={answer}
          more={seeMore}
          setMore={setSeeMore}
        />
      ))}
  </>
);

QuestionAnswersPresentational.propTypes = {
  first: answerPropTypes.isRequired,
  remaining: PropTypes.arrayOf(answerPropTypes.isRequired).isRequired,
  seeMore: PropTypes.bool.isRequired,
  setSeeMore: PropTypes.func.isRequired,
};

export default QuestionAnswersPresentational;
