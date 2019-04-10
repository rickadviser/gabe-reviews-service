import { shape, string, number } from 'prop-types';
import userPropTypes from './users';

const answerPropTypes = shape({
  _id: string.isRequired,
  question_id: string.isRequired,
  answer: string.isRequired,
  date: string.isRequired,
  user_id: userPropTypes.isRequired,
  votes: number.isRequired,
});

export default answerPropTypes;
