import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import QuestionAnswersPresentational from './QuestionAnswersPresentational';

const QuestionAnswers = ({ id: questionId }) => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/api/reviews/questions/${questionId}/answers`)
      .then(res => res.json())
      .then(data => {
        setAnswers(data);
        setLoading(false);
      });
  }, [questionId]);

  const [first, ...remaining] = answers;

  return (
    <QuestionAnswersPresentational
      first={first}
      remaining={remaining}
      seeMore={seeMore}
      setSeeMore={setSeeMore}
    />
  );
};

QuestionAnswers.propTypes = {
  id: PropTypes.string.isRequired,
};

export default QuestionAnswers;
