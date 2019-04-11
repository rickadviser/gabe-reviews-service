import { shape, string } from 'prop-types';
import userPropTypes from './users';

const roomtipPropTypes = shape({
  _id: string.isRequired,
  hotel_id: string.isRequired,
  tip: string.isRequired,
  date: string.isRequired,
  user_id: userPropTypes.isRequired,
});

export default roomtipPropTypes;
