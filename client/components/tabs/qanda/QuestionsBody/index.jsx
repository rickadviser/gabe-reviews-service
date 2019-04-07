import React, { useContext } from 'react';

import HotelContext from '../../../../context/hotel-context';
import QuestionsState from '../QuestionsState';
import QuestionSingle from '../QuestionSingle/index';

const QuestionsBody = () => {
  const { questions } = useContext(HotelContext);

  return (
    <QuestionsState>
      {questions.map(question => (
        <QuestionSingle key={question._id} question={question} />
      ))}
    </QuestionsState>
  );
};

export default QuestionsBody;
