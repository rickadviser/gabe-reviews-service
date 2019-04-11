import { shape, string } from 'prop-types';
import userPropTypes from './users';

const questionPropTypes = shape({
  _id: string.isRequired,
  date: string.isRequired,
  hotel_id: string.isRequired,
  user_id: userPropTypes.isRequired,
  question: string.isRequired,
});

export default questionPropTypes;
